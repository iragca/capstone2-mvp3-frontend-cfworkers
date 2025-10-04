<script lang="ts">
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	import type { SimulationNodeDatum, SimulationLinkDatum, Simulation, D3DragEvent } from 'd3';

	let svgEl: SVGSVGElement;

	interface Node extends SimulationNodeDatum {
		id: string; // your ID
		x?: number; // added by simulation
		y?: number;
		fx?: number | null; // fixed position
		fy?: number | null;
	}

	interface Link {
		source: string | Node;
		target: string | Node;
	}

	const nodes: Node[] = [{ id: 'Tweet' }, { id: '@bob' }, { id: '@carol' }, { id: '@dave' }];

	const links: Link[] = [
		{ source: '@bob', target: 'Tweet' },
		{ source: '@carol', target: 'Tweet' },
		{ source: '@dave', target: 'Tweet' }
	];

	const width = 200;
	const height = 400;
	onMount(() => {
		const svg = d3.select(svgEl);

		const simulation = d3
			.forceSimulation(nodes)
			.force(
				'link',
				d3
					.forceLink(links)
					.id((d: Node) => d.id)
					.distance(100)
			)
			.force('charge', d3.forceManyBody().strength(-200))
			.force('center', d3.forceCenter(width / 2, height / 2));

		const link = svg
			.append('g')
			.attr('stroke', '#999')
			.attr('stroke-opacity', 0.6)
			.selectAll('line')
			.data(links)
			.join('line')
			.attr('stroke-width', 2);

		link
			.filter((d) => (d.source as Node).id === '@dave' && (d.target as Node).id === 'Tweet')
			.attr('stroke-dasharray', '4 2'); // 4px dash, 2px gap

		const node = svg
			.append('g')
			.attr('stroke', '#fff')
			.attr('stroke-width', 1.5)
			.selectAll('g')
			.data(nodes)
			.join('g')
			.call(drag(simulation));

		node
			.filter((d) => d.id !== 'Tweet')
			.append('circle')
			.attr('r', 10)
			.attr('fill', '#FFDE59');

		node
			.filter((d) => d.id === 'Tweet')
			.append('rect')
			.attr('x', -12) // center it around (x,y)
			.attr('y', -12)
			.attr('width', 24)
			.attr('height', 24)
			.attr('fill', 'tomato');

		const label = svg
			.append('g')
			.selectAll('text')
			.data(nodes)
			.join('text')
			.text((d: Node) => d.id)
			.attr('font-size', 12)
			.attr('dy', -15)
			.attr('fill', 'white');

		const linkLabel = svg
			.append('g')
			.selectAll('text')
			.data(
				links.filter(
					(d) =>
						typeof d.source !== 'string' &&
						d.source.id === '@dave' &&
						typeof d.target !== 'string' &&
						d.target.id === 'Tweet'
				)
			)
			.join('text')
			.text((d) => '0.5')
			.attr('font-size', 10)
			.attr('fill', 'white')
			.attr('text-anchor', 'right');

		simulation.on('tick', () => {
			link
				.attr('x1', (d) => d.source.x)
				.attr('y1', (d) => d.source.y)
				.attr('x2', (d) => d.target.x)
				.attr('y2', (d) => d.target.y);

			// Position whole <g> instead of individual shapes
			node.attr('transform', (d) => `translate(${d.x},${d.y})`);
			label.attr('x', (d) => d.x).attr('y', (d) => d.y);
			linkLabel
				.attr('x', (d) => {
					const x1 = typeof d.source === 'string' ? 0 : d.source.x;
					const x2 = typeof d.target === 'string' ? 0 : d.target.x;
					return (x1 + x2) / 2;
				})
				.attr('y', (d) => {
					const y1 = typeof d.source === 'string' ? 0 : d.source.y;
					const y2 = typeof d.target === 'string' ? 0 : d.target.y;
					return (y1 + y2) / 2;
				});
		});

		function drag(simulation: Simulation) {
			function dragstarted(event: D3DragEvent, d: Node) {
				if (!event.active) simulation.alphaTarget(0.3).restart();
				d.fx = d.x;
				d.fy = d.y;
			}
			function dragged(event: D3DragEvent, d: Node) {
				d.fx = event.x;
				d.fy = event.y;
			}
			function dragended(event: D3DragEvent, d: Node) {
				if (!event.active) simulation.alphaTarget(0);
				d.fx = null;
				d.fy = null;
			}
			return d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended);
		}
	});
</script>

<svg bind:this={svgEl} {width} {height} class="bg-zinc-800 overflow-visible"></svg>
