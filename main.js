const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

const pcHTML = (pc) => {
    const pcSection = `<section id="computer--1">
	<h1>${pc.manufacturer} ${pc.make}</h1>
	<div>Model: ${pc.model}</div>
	<div>Memory: ${pc.specs.memory} GB</div>
	<div>Hard drive space: ${pc.specs.hardDrive}</div>
	<div>Processor speed: ${pc.specs.processor} Ghz</div>
</section>`

    return pcSection
}

let pcSelection = pcHTML(computer)

console.log(pcSelection)