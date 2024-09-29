import React from 'react'

function Section1_cards() {
  return (
    <div>
       <div class="w-[300px] h-[500px] bg-white shadow-xl rounded-lg overflow-hidden ">
            <div class="flex justify-between items-center p-4 bg-gray-100">
              <span class="text-xs font-bold text-gray-600">CRICKET</span>
              <span class="text-xs font-bold text-gray-600">CSS</span>
              <span class="text-xs font-bold text-gray-600">Sports Card</span>
            </div>
            <img
              class="w-full h-64 object-cover"
              src="https://www.telegraph.co.uk/content/dam/cricket/2023/10/11/TELEMMGLPICT000352697219_16970291244650_trans_NvBQzQNjv4BqRo0U4xU-30oDveS4pXV-Vv4Xpit_DMGvdp2n7FDd82k.jpeg?imwidth=960"
              alt="Cricket Match"
            />
            <div class="p-4">
              <div class="text-4xl font-bold text-gray-800 flex justify-between">
                <span>250/7</span>
                <span>245/9</span>
              </div>
              <div class="flex justify-between text-gray-600 mt-2">
                <div>
                  <p class="font-semibold">Team A</p>
                  <p class="text-xs">Team A: 240/7</p>
                </div>
                <div>
                  <p class="font-semibold">Team B</p>
                  <p class="text-xs">Team B: 245/9</p>
                </div>
              </div>
            </div>
            <div class="p-4 bg-gray-100 text-center ">
              <h2 class="text-xl font-bold text-gray-800">Game Name</h2>
              <p class="text-sm text-gray-600">Team A vs Team B</p>
            </div>
            <div class="p-4 flex justify-between items-center">
              <p class="text-lg font-semibold text-gray-800">Gaya</p>
              <p class="text-sm text-gray-600">Gihar, Bihar</p>
            </div>
            <div class="flex justify-between items-center p-4 bg-gray-100">
              <span class="text-xs text-gray-600">25 8 25 49</span>
              <span class="text-xs text-gray-600">29</span>
            </div>
          </div>
    </div>
  )
}

export default Section1_cards
