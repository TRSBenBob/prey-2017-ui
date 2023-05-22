<script>
  import Tilt from '$lib/components/Tilt.svelte'
</script>

<div
  class="flex flex-col items-center justify-center h-screen w-screen p-8 bg-woodsmoke overflow-hidden"
>
  <Tilt amount="5deg">
    <div
      class="relative flex flex-row gap-12 px-8 py-6 border border-cape-cod rounded-t-[4rem] overflow-hidden"
    >
      <div class="absolute inset-0 bg-gradient-radial from-rob-roy opacity-5 pointer-events-none" />

      <div>
        <ul class="flex flex-col gap-1 w-[24rem] pl-6 text-white text-[24px] overflow-y-scroll">
          <li
            class="relative px-3 py-5 border border-picton-blue border-opacity-20 bg-picton-blue bg-opacity-10"
          >
            <span class="drop-shadow-coffee-bean">Apex Tendril</span>
            <span
              class="absolute bottom-1 right-1 block w-5 h-5 rounded-full border border-cape-cod"
            />
          </li>
          <li class="relative px-3 py-5 bg-rob-roy text-woodsmoke -translate-x-4 -translate-y-2">
            <span class="drop-shadow-roti">Military Operator</span>
            <span
              class="absolute bottom-1 right-1 block w-5 h-5 rounded-full border border-dusty-gray"
            />
          </li>
          <li
            class="relative px-3 py-5 border border-picton-blue border-opacity-20 bg-picton-blue bg-opacity-10"
          >
            <span class="drop-shadow-coffee-bean">Coral Node</span>
            <span
              class="absolute bottom-1 right-1 block w-5 h-5 rounded-full border border-cape-cod"
            />
          </li>
          <li
            class="relative px-3 py-5 border border-picton-blue border-opacity-20 bg-picton-blue bg-opacity-10"
          >
            <span class="drop-shadow-coffee-bean">Medical Operator</span>
            <span
              class="absolute bottom-1 right-1 block w-5 h-5 rounded-full border border-cape-cod"
            />
          </li>
          <li
            class="relative px-3 py-5 border border-picton-blue border-opacity-20 bg-picton-blue bg-opacity-10"
          >
            <span class="drop-shadow-coffee-bean">Morgan Yu</span>
            <span
              class="absolute bottom-1 right-1 block w-5 h-5 rounded-full border border-cape-cod"
            />
          </li>
          <li
            class="relative px-3 py-5 border border-picton-blue border-opacity-20 bg-picton-blue bg-opacity-10"
          >
            <span class="drop-shadow-coffee-bean">Etheric Phantom</span>
            <span
              class="absolute bottom-1 right-1 block w-5 h-5 rounded-full border border-cape-cod"
            />
          </li>
          <li
            class="relative px-3 py-5 border border-picton-blue border-opacity-20 bg-picton-blue bg-opacity-10"
          >
            <span class="drop-shadow-coffee-bean">Poltergeist</span>
            <span
              class="absolute bottom-1 right-1 block w-5 h-5 rounded-full border border-cape-cod"
            />
          </li>
          <li
            class="relative px-3 py-5 border border-picton-blue border-opacity-20 bg-picton-blue bg-opacity-10"
          >
            <span class="drop-shadow-coffee-bean">Greater Mimic</span>
            <span
              class="absolute bottom-1 right-1 block w-5 h-5 rounded-full border border-cape-cod"
            />
          </li>
          <li
            class="relative px-3 py-5 border border-picton-blue border-opacity-20 bg-picton-blue bg-opacity-10"
          >
            <span class="drop-shadow-coffee-bean">Thermal Phantom</span>
            <span
              class="absolute bottom-1 right-1 block w-5 h-5 rounded-full border border-cape-cod"
            />
          </li>
        </ul>
      </div>

      <div>
        <h1 class="text-[36px] text-rob-roy drop-shadow-coffee-bean">Military Operator</h1>

        <hr class="mt-2 mb-4 border-cape-cod border-t w-full" />

        <div class="flex flex-row gap-4">
          <div
            class="
            w-[746px] h-[640px] pr-12
            flex flex-col gap-6 overflow-scroll
            scrollbar-thin scrollbar-track-cape-cod scrollbar-thumb-dusty-gray scrollbar-rounded-full
            text-[22px] text-cutty-sark
          "
          >
            <div class="flex flex-row items-center gap-1">
              <p class="-mb-1 mr-2 text-[20px] text-bismark uppercase drop-shadow-coffee-bean">
                Research
              </p>

              <div class="w-2 h-6 -skew-x-15 rounded-full bg-white shadow-glow" />
              <div class="w-2 h-6 -skew-x-15 rounded-full bg-white shadow-glow" />
              <div class="w-2 h-6 -skew-x-15 rounded-full bg-white shadow-glow" />
            </div>

            <p class="drop-shadow-coffee-bean">
              <strong class="uppercase">Excerpt from TranStar Operator Brochure:</strong><br />
              The N-CN9 <em>Blackbox</em> Military Operator is the world's most advanced unmanned
              multi-role fighter. Armed with a state-of-the-art MAG-directed energy weapon and an
              OMNI navigation systems, the Military Operator is never short on firepower. From
              assault operations to security detail, the innovative
              <em>Synthetic Hyperdynamic Neural Network</em>
              ensures the Miltary Operator is quick to respond to developing and dangerous situations.
            </p>

            <p class="drop-shadow-coffee-bean">
              <strong>Morgan's Notes:</strong> <br />
              TranStar's been covering their tracks about these. Don't want to look like an arms-tech
              company. They're probably wired into <em>Talos I</em>'s security system. Could track
              me using the station's security rosters. Might be a way to get rid of my tracking
              bracelet.
            </p>

            <p class="drop-shadow-coffee-bean">
              <strong class="uppercase">Scan Data</strong> <br />
              <strong class="uppercase">--------------------</strong> <br />
              <strong class="uppercase">Weaknesses:</strong> <br />
            </p>

            <ul class="-mt-6">
              <li>Electric</li>
              <li>EMP</li>
              <li>Explosive</li>
            </ul>
          </div>
          <div
            class="
            w-[25rem] -mr-8 -mb-10 -mt-2
            border-cape-cod border-t border-l rounded-tl-[4rem] overflow-hidden
          "
          >
            <img
              src="https://placehold.co/800x1280/000000/FFF?text=400:640"
              alt="Military Operator"
              class="w-full h-full object-cover"
              width="400"
              height="640"
            />
          </div>
        </div>
      </div>
    </div>
  </Tilt>
</div>
