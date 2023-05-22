<script lang="ts">
  export let amount = '15deg'

  let tilt: HTMLDivElement

  const handleMouseMove = (ev: MouseEvent) => {
    const elem = ev.currentTarget as HTMLElement
    const x = (ev.x - elem.offsetLeft - elem.offsetWidth / 2) / elem.offsetWidth
    const y = (ev.y - elem.offsetTop - elem.offsetHeight / 2) / elem.offsetHeight

    tilt.style.setProperty('--rx', x.toString())
    tilt.style.setProperty('--ry', y.toString())
  }

  const handleMouseReset = (_ev: MouseEvent) => {
    tilt.style.setProperty('--rx', '0')
    tilt.style.setProperty('--ry', '0')
  }
</script>

<div class="wrapper w-full h-full" on:mousemove={handleMouseMove} on:mouseleave={handleMouseReset}>
  <div
    bind:this={tilt}
    style="--tilt-amount:{amount}"
    class="tilt w-full h-full transition-transform duration-200 hover:duration-0"
  >
    <slot />
  </div>
</div>

<style>
  .wrapper {
    transform-style: preserve-3d;
    transform: perspective(100vmax);
  }

  .tilt {
    transform: rotateY(calc(var(--rx) * var(--tilt-amount, 15deg) * -1))
      rotateX(calc(var(--ry) * var(--tilt-amount, 15deg)));
  }
</style>
