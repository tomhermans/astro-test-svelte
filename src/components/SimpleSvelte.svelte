<script>
  import { getRandomInt} from "../utils/utils";
  import { getFromLS, setToLS } from "../utils/storage";

  
	export let name;
	export let answer;
  let count = getRandomInt(0, 350);
  let newHSL = `hsl(${count}, 80%, 20%)`;

  function newColor() {
    newHSL = `hsl(${getRandomInt(0, 350)}, 80%, 20%)`;
    setColor(newHSL);
  }
  function getColor() {
    const clr = getComputedStyle(document.documentElement).getPropertyValue('--violet-9');
    console.log(clr);
  }
  function setColor(color) {
    console.log('SETCOLOR CLICKED',color);
    document.documentElement.style.setProperty('--violet-9', color);
    const clr = getComputedStyle(document.documentElement).getPropertyValue('--violet-9');
    console.log(clr);
  }
  const options = [
    { value: "brown", label: "Chocolate" },
    { value: "red", label: "Strawberry" },
    { value: "#F3E5AB", label: "Vanilla" },
  ];
  let selected = options[0];
</script>

<div id="" class="">
  <h1>Hello {name}!  </h1>
  <p>The answer is {answer}</p>
  <button on:click={newColor}>new Random HSL</button>
  <button on:click={getColor}>get Color</button>
  <button on:click={setColor({newHSL})}>SET Color</button>

  <select bind:value={selected.value}>
    {#each options as option}
      <option value={option.value}>{option.label}</option>
    {/each}
  </select>
  {#if selected.value === 'brown'}
	  <p>{JSON.stringify(options[0])}</p>
  {:else if selected.value === 'red'}
    <p>{JSON.stringify(options[1])}</p>
  {:else if selected.value === '#F3E5AB'}
    <p>{JSON.stringify(options[2])}</p>
  {/if}

</div>

<style>
  h1 {
    color: var(--green-3);
    font-size: var(--font-size-3);
  }
</style>
