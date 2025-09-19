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

	const nodes: Node[] = [{ id: 'Alice' }, { id: 'Bob' }, { id: 'Carol' }, { id: 'Dave' }];

	const links: Link[] = [
		{ source: 'Alice', target: 'Bob' },
		{ source: 'Alice', target: 'Carol' },
		{ source: 'Bob', target: 'Dave' }
	];

	onMount(() => {
		const width = 600;
		const height = 400;

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

		const node = svg
			.append('g')
			.attr('stroke', '#fff')
			.attr('stroke-width', 1.5)
			.selectAll('circle')
			.data(nodes)
			.join('circle')
			.attr('r', 10)
			.attr('fill', 'steelblue')
			.call(drag(simulation));

		const label = svg
			.append('g')
			.selectAll('text')
			.data(nodes)
			.join('text')
			.text((d: Node) => d.id)
			.attr('font-size', 12)
			.attr('dy', -15);

		simulation.on('tick', () => {
			link
				.attr('x1', (d: Link) => (typeof d.source === 'string' ? 0 : d.source.x))
				.attr('y1', (d: Link) => (typeof d.source === 'string' ? 0 : d.source.y))
				.attr('x2', (d: Link) => (typeof d.target === 'string' ? 0 : d.target.x))
				.attr('y2', (d: Link) => (typeof d.target === 'string' ? 0 : d.target.y));

			node.attr('cx', (d: Node) => d.x).attr('cy', (d: Node) => d.y);

			label.attr('x', (d: Node) => d.x).attr('y', (d: Node) => d.y);
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

<svg bind:this={svgEl} width="600" height="400" class="bg-zinc-800"></svg>
