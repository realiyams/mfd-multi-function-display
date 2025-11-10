const MFD = document.getElementById('MFD');

MFD.innerHTML = `
<div id="L1" class="mfd-bolt">
  <div class="mfd-bolt-head">⊗</div>
</div>
<div id="L2" class="mfd-bolt">
  <div class="mfd-bolt-head">⊗</div>
</div>
<div id="L3" class="mfd-bolt">
  <div class="mfd-bolt-head">⊗</div>
</div>
<div id="L4" class="mfd-bolt">
  <div class="mfd-bolt-head">⊗</div>
</div>

<div id="L6" class="dot-container">
  <div class="dot">⦿</div>
</div>
<div id="L7" class="dot-container">
  <div class="dot">⦿</div>
</div>

<div id="T1" class="test-button">
  <div class="btn off test-text">
    <div class="acc"></div><span class="text-center">TEST</span>
  </div>
</div>

<div id="T2" class="minus-button">
  <div class="btn off operator-text">
    <div class="acc"></div><span class="text-center">-</span>
  </div>
</div>

<div id="T3" class="plus-button">
  <div class="btn off operator-text">
    <div class="acc"></div><span class="text-center">+</span>
  </div>
</div>

<div class="frame">

  <div class="display">

    <div id="MFD_HEADINGS" class="headings">
      <div class="line" style="transform: rotate(5deg);">
        <div class="top" style="height: 7px;"></div>
        <div class="bottom" style="height: 7px;"></div>
      </div>

      <div class="line" style="transform: rotate(10deg);">
        <div class="top" style="height: 11px;"></div>
        <div class="bottom" style="height: 11px;"></div>
      </div>

      <div class="line" style="transform: rotate(15deg);">
        <div class="top" style="height: 7px;"></div>
        <div class="bottom" style="height: 7px;"></div>
      </div>

      <div class="line" style="transform: rotate(20deg);">
        <div class="top" style="height: 11px;"></div>
        <div class="bottom" style="height: 11px;"></div>
      </div>

      <div class="line" style="transform: rotate(25deg);">
        <div class="top" style="height: 7px;"></div>
        <div class="bottom" style="height: 7px;"></div>
      </div>

      <div class="line" style="transform: rotate(30deg);">
        <div class="top" style="height: 11px;"></div>
        <div class="bottom" style="height: 11px;"></div>
      </div>

      <div class="line" style="transform: rotate(35deg);">
        <div class="top" style="height: 7px;"></div>
        <div class="bottom" style="height: 7px;"></div>
      </div>

      <div class="line" style="transform: rotate(40deg);">
        <div class="top" style="height: 11px;"></div>
        <div class="bottom" style="height: 11px;"></div>
      </div>

      <div class="line" style="transform: rotate(45deg);">
        <div class="top" style="height: 7px;"></div>
        <div class="bottom" style="height: 7px;"></div>
      </div>

      <div class="line" style="transform: rotate(50deg);">
        <div class="top" style="height: 11px;"></div>
        <div class="bottom" style="height: 11px;"></div>
      </div>

      <div class="line" style="transform: rotate(55deg);">
        <div class="top" style="height: 7px;"></div>
        <div class="bottom" style="height: 7px;"></div>
      </div>

      <div class="line" style="transform: rotate(60deg);">
        <div class="top" style="height: 11px;"></div>
        <div class="bottom" style="height: 11px;"></div>
      </div>

      <div class="line" style="transform: rotate(65deg);">
        <div class="top" style="height: 7px;"></div>
        <div class="bottom" style="height: 7px;"></div>
      </div>

      <div class="line" style="transform: rotate(70deg);">
        <div class="top" style="height: 11px;"></div>
        <div class="bottom" style="height: 11px;"></div>
      </div>

      <div class="line" style="transform: rotate(75deg);">
        <div class="top" style="height: 7px;"></div>
        <div class="bottom" style="height: 7px;"></div>
      </div>

      <div class="line" style="transform: rotate(80deg);">
        <div class="top" style="height: 11px;"></div>
        <div class="bottom" style="height: 11px;"></div>
      </div>

      <div class="line" style="transform: rotate(85deg);">
        <div class="top" style="height: 7px;"></div>
        <div class="bottom" style="height: 7px;"></div>
      </div>

      <div class="line" style="transform: rotate(90deg);">
        <div class="top" style="height: 11px;"></div>
        <div class="bottom" style="height: 11px;"></div>
      </div>

      <div class="line" style="transform: rotate(95deg);">
        <div class="top" style="height: 7px;"></div>
        <div class="bottom" style="height: 7px;"></div>
      </div>

      <div class="line" style="transform: rotate(100deg);">
        <div class="top" style="height: 11px;"></div>
        <div class="bottom" style="height: 11px;"></div>
      </div>

      <div class="line" style="transform: rotate(105deg);">
        <div class="top" style="height: 7px;"></div>
        <div class="bottom" style="height: 7px;"></div>
      </div>

      <div class="line" style="transform: rotate(110deg);">
        <div class="top" style="height: 11px;"></div>
        <div class="bottom" style="height: 11px;"></div>
      </div>

      <div class="line" style="transform: rotate(115deg);">
        <div class="top" style="height: 7px;"></div>
        <div class="bottom" style="height: 7px;"></div>
      </div>

      <div class="line" style="transform: rotate(120deg);">
        <div class="top" style="height: 11px;"></div>
        <div class="bottom" style="height: 11px;"></div>
      </div>

      <div class="line" style="transform: rotate(125deg);">
        <div class="top" style="height: 7px;"></div>
        <div class="bottom" style="height: 7px;"></div>
      </div>

      <div class="line" style="transform: rotate(130deg);">
        <div class="top" style="height: 11px;"></div>
        <div class="bottom" style="height: 11px;"></div>
      </div>

      <div class="line" style="transform: rotate(135deg);">
        <div class="top" style="height: 7px;"></div>
        <div class="bottom" style="height: 7px;"></div>
      </div>

      <div class="line" style="transform: rotate(140deg);">
        <div class="top" style="height: 11px;"></div>
        <div class="bottom" style="height: 11px;"></div>
      </div>

      <div class="line" style="transform: rotate(145deg);">
        <div class="top" style="height: 7px;"></div>
        <div class="bottom" style="height: 7px;"></div>
      </div>

      <div class="line" style="transform: rotate(150deg);">
        <div class="top" style="height: 11px;"></div>
        <div class="bottom" style="height: 11px;"></div>
      </div>

      <div class="line" style="transform: rotate(155deg);">
        <div class="top" style="height: 7px;"></div>
        <div class="bottom" style="height: 7px;"></div>
      </div>

      <div class="line" style="transform: rotate(160deg);">
        <div class="top" style="height: 11px;"></div>
        <div class="bottom" style="height: 11px;"></div>
      </div>

      <div class="line" style="transform: rotate(165deg);">
        <div class="top" style="height: 7px;"></div>
        <div class="bottom" style="height: 7px;"></div>
      </div>

      <div class="line" style="transform: rotate(170deg);">
        <div class="top" style="height: 11px;"></div>
        <div class="bottom" style="height: 11px;"></div>
      </div>

      <div class="line" style="transform: rotate(175deg);">
        <div class="top" style="height: 7px;"></div>
        <div class="bottom" style="height: 7px;"></div>
      </div>

      <div class="line" style="transform: rotate(180deg);">
        <div class="top" style="height: 11px;"></div>
        <div class="bottom" style="height: 11px;"></div>
      </div>

    </div>

    <!-- heading bug start -->
    <div id="MFD_HEADING_BUG" class="heading-bug-container">
      <div class="heading-bug-square">
        <div class="heading-bug-triangle">
          ▶
        </div>
      </div>
    </div>
    <!-- heading bug end -->

    <div class="heading-circle-accuracy">
      <div class="line-left-1"></div>
      <div class="triangle-left"></div>
      <div class="line-left-2"></div>

      <div class="line-right-1"></div>
      <div class="triangle-right"></div>
      <div class="line-right-2"></div>

      <div class="line-left-bot-1"></div>
      <div class="triangle-left-bot"></div>
      <div class="line-left-bot-2"></div>

      <div class="line-right-bot-1"></div>
      <div class="triangle-right-bot"></div>
      <div class="line-right-bot-2"></div>
    </div>

    <svg class="plane-icon" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M1 2C1 1.44772 1.44772 1 2 1H3.01472C4.87123 1 6.65171 1.7375 7.96446 3.05025L10.7457 5.83149L17.9212 3.041C19.03 2.60983 20.2887 2.87451 21.1299 3.71569L22.7071 5.29289C22.9283 5.51412 23.0333 5.82613 22.9907 6.13608C22.9481 6.44603 22.7629 6.71819 22.4903 6.87158L15.5633 10.768L17.8955 13.4334L20.1586 13.1101C20.9108 13.0026 21.6698 13.2556 22.2071 13.7929C23.1499 14.7357 23.1499 16.2643 22.2071 17.2071L17.2071 22.2071C16.2643 23.1499 14.7357 23.1499 13.7929 22.2071C13.2556 21.6698 13.0026 20.9108 13.1101 20.1586L13.4334 17.8955L10.768 15.5633L6.87157 22.4903C6.71819 22.7629 6.44603 22.9481 6.13608 22.9907C5.82613 23.0333 5.51412 22.9283 5.29289 22.7071L3.7157 21.1299C2.87451 20.2887 2.60983 19.03 3.041 17.9213L5.83149 10.7457L3.05025 7.96447C1.7375 6.65171 1 4.87123 1 3.01472V2ZM3 3V3.01472C3 4.3408 3.52678 5.61257 4.46447 6.55025L7.70711 9.79289C7.9875 10.0733 8.07573 10.4929 7.932 10.8624L4.90501 18.6461C4.76129 19.0157 4.84951 19.4353 5.12991 19.7157L5.77482 20.3606L9.62843 13.5098C9.77608 13.2473 10.0342 13.0653 10.331 13.0144C10.6279 12.9635 10.9318 13.0491 11.1585 13.2475L15.1585 16.7474C15.4131 16.9702 15.5378 17.3065 15.4899 17.6414L15.0899 20.4414C15.0715 20.5705 15.1149 20.7007 15.2071 20.7929C15.3689 20.9547 15.6311 20.9547 15.7929 20.7929L20.7929 15.7929C20.9547 15.6311 20.9547 15.3689 20.7929 15.2071C20.7007 15.1149 20.5705 15.0715 20.4414 15.0899L17.6414 15.4899C17.3065 15.5378 16.9702 15.4131 16.7474 15.1585L13.2474 11.1585C13.0491 10.9318 12.9635 10.6279 13.0144 10.331C13.0653 10.0342 13.2472 9.77608 13.5097 9.62842L20.3606 5.77481L19.7157 5.12991C19.4353 4.84951 19.0157 4.76129 18.6461 4.90501L10.8624 7.932C10.4929 8.07573 10.0733 7.9875 9.79289 7.70711L6.55025 4.46446C5.61257 3.52678 4.3408 3 3.01472 3H3Z" />
    </svg>

    <div id="MFD_POINTS" class="points">
      <div class="south">S</div>
      <div class="deg330">33</div>
      <div class="deg300">30</div>
      <div class="west">W</div>
      <div class="deg240">24</div>
      <div class="deg210">21</div>
      <div class="deg150">15</div>
      <div class="deg120">12</div>
      <div class="east">E</div>
      <div class="deg60">6</div>
      <div class="deg30">3</div>
      <div class="north">N</div>
    </div>

    <div class="circle-headings">

    </div>

    <table class="heading-degree-accuracy">
      <tr>
        <td id="HEADING_DEGREE">
          360
        </td>
      </tr>
    </table>

    <div class="accuracy-line-1"></div>
    <div class="accuracy-line-2"></div>
    <div class="accuracy-line-3"></div>

    <div class="accuracy-line-4"></div>
    <div class="accuracy-line-5"></div>

    <div class="accuracy-line-6"></div>
    <div class="accuracy-line-7"></div>

    <!-- GREEN NEEDLE START -->
    <div id="MFD_GREEN_NEEDLE" class="green-needle">
      <div class="line-1"></div>

      <div class="circle-1"></div>

      <div class="line-2"></div>

      <div class="line-3"></div>
      <div class="line-4"></div>
    </div>
    <!-- GREEN NEEDLE END -->

    <!-- YELLOW NEEDLE START -->
    <div id="MFD_YELLOW_NEEDLE" class="yellow-needle">

      <div class="line-1"></div>
      <div class="line-2"></div>
      <div class="line-3"></div>
      <div class="line-4"></div>
      <div class="line-5"></div>
      <div class="line-6"></div>
      <div class="line-7"></div>

      <div class="line-8"></div>
      <div class="line-9"></div>

      <div class="line-10"></div>
      <div class="line-11"></div>

    </div>
    <!-- YELLOW NEEDLE END -->

    <!-- BLUE NEEDLE START -->
    <div id="MFD_BlUE_NEEDLE" class="blue-needle">

      <div class="triangle-1">▶</div>
      <div class="triangle-2">▶</div>

      <div class="rectangle-1"></div>
      <div class="rectangle-2"></div>
      <div id="MFD_BlUE_NEEDLE_BODY" class="needle-body"></div>

    </div>
    <!-- BLUE NEEDLE END -->

    <!-- PURPLE NEEDLE START -->
    <div id="MFD_PURPLE_NEEDLE" class="purple-needle">

      <div class="triangle-1">▶</div>
      <div class="triangle-2">►</div>

      <div class="line-1"></div>
      <div class="line-2"></div>
      <div id="MFD_PURPLE_NEEDLE_BODY" class="needle-body"></div>

    </div>
    <!-- PURPLE NEEDLE END -->

    <!-- WHITE NEEDLE START -->
    <div id="MFD_WHITE_NEEDLE" class="white-needle">
      <div id="MFD_WHITE_NEEDLE_DEGREE" class="degree">22</div>
      <div class="degree-coma">.</div>

      <div class="circle-1"></div>
      <div class="circle-2"></div>
      <div class="circle-3"></div>
      <div class="circle-4"></div>
      <div class="circle-5"></div>
    </div>
    <!-- WHITE NEEDLE END -->

    <!-- VOR1 START -->
    <div class="vor1">
      <div id="VOR1">
        <div class="icon">
          <div>VOR1</div>
          <div class="line"></div>
          <div class="circle"></div>
        </div>

        <div class="vor1-details">
          <div style="opacity: 0;">- - -</div>
          <div style="opacity: 0;">- - -</div>
          <div style="opacity: 0;">- - -</div>
          <div class="dme">- - -DME</div>
        </div>
      </div>
    </div>
    <!-- VOR1 END -->

    <!-- FMS START -->
    <div class="fms">
      <div id="FMS">
        <div>FMS</div>
        <div>- - -</div>
        <div>- - -</div>
        <div class="xtk">- - -</div>
      </div>
    </div>
    <!-- FMS END -->

    <!-- VOR2 START -->
    <div class="vor2">
      <div id="VOR2">
        <div class="vor2-text">VOR2</div>
        <div class="icon">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
          <div class="line4"></div>
          <div class="line5"></div>
          <div class="line6"></div>
          <div class="line7"></div>
        </div>

        <div class="vor2-details">
          <div style="opacity: 0;">- - -</div>
          <div style="opacity: 0;">- - -</div>
          <div style="opacity: 0;">- - -</div>
          <div class="dme">- - -DME</div>
        </div>
      </div>
    </div>
    <!-- VOR2 END -->

    <!-- VOR1 INFO START -->
    <div class="vor1-info">
      <div id="VOR1INFO">
        <div>VOR1</div>
        <div>- - -</div>
        <div>- - -</div>
        <div>- - -</div>
        <div class="dme">- - -DME</div>
      </div>
    </div>
    <!-- VOR1 INFO END -->
    
    <!-- TAS GS START -->
    <div class="tas-gs-container">
      <table>
        <tr>
          <td>
            TAS
          </td>
          <td id="tas-value" class="tas-value">
            0
          </td>
        </tr>
        <tr>
          <td>
            GS
          </td>
          <td id="gs-value" class="gs-value">
            0
          </td>
        </tr>
      </table>
    </div>
    <!-- TAS GS END -->

    <!-- TCAS WX START -->
    <div class="tcas-ab-container">
      <div>TCAS</div>
      <div>AB/BL</div>
    </div>

    <div class="wxnorm-container">
      <div>WX</div>
      <div>GAIN CAL</div>
      <div>TLT 3.00°</div>
    </div>
    <!-- TCAS WX END -->

    <!-- FLIGHT STATUS START -->
    <div class="top-display-container">
      <div class="flights-status-container">
        <table class="flight-details">
          <tbody>
            <tr class="row">
              <td class="flight-value-one top-gap">
                FR
              </td>
              <td class="flight-value-two top-gap">
                
              </td>
              <td class="column top-gap">

              </td>
              <td class="column top-gap">

              </td>
            </tr>
            <tr class="row to-cyan">
              <td class="flight-value-one top-gap">
                TO
              </td>
              <td class="flight-value-two top-gap">
                
              </td>
              <td class="column top-gap">
                - - - -NM
              </td>
              <td class="column top-gap">
                - - + - -
              </td>
            </tr>
            <tr class="row">
              <td class="flight-value-one top-gap">
                NX
              </td>
              <td class="flight-value-two top-gap">
                
              </td>
              <td class="column top-gap">
                - - - -NM
              </td>
              <td class="column top-gap">
                - - + - -
              </td>
            </tr>
            <tr class="row">
              <td class="flight-value-one top-gap">
                DEST
              </td>
              <td class="flight-value-two top-gap">
                
              </td>
              <td class="column top-gap">
                - - - -NM
              </td>
              <td class="column top-gap">
                - - + - -
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="time-est-container">
        <table class="time-eta-details">
          <tr>
            <td class="utc top-gap">
              UTC --:--
            </td>
            <td>

            </td>
          </tr>
          <tr>
            <td class="eta top-gap">
              ETA --:--
            </td>
          </tr>
          <tr>
            <td class="sat top-gap-extra">
              SAT --
            </td>
          </tr>
          <tr>
            <td class="isa top-gap">
              ISA ---
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- FLIGHT STATUS END -->

  </div>

  <!-- <div id="il_PFD_ONE_OFF" class="mfd-off">
    
  </div> -->

  <div id="MFD_BRIGHTNESS" class="mfd-brightness">
    
  </div>

</div>
<!-- <div class="controls-container" style="display: none;"> -->
<div class="controls-container">
  <!-- CURSOR CONTROL -->
  <div class="slider-container">
    <button id="MFD_goTop">CURSOR GO TOP</button>
  </div>

  <div class="slider-container">
    <button id="MFD_goDown">CURSOR GO DOWN</button>
  </div>

  <!-- CURSOR BLINK CONTROL -->
  <div class="slider-container">
    <button id="MFD_blinkButtonCURSOR">CURSOR START BLINK</button>
  </div>

  <div class="slider-container">

  </div>

  <!-- HEADING NEEDLE CONTROL -->
  <div class="slider-container">
    <label>PURPLE NEEDLE</label>
    <input type="range" id="MFD_PURPLE_NEEDLE_SLIDER" min="0" max="360" value="0">
  </div>

  <div class="slider-container">
    <label>PURPLE NEEDLE (NUMBER)</label>
    <input id="MFD_PURPLE_NEEDLE_NUMBER" type="number" min="-1" max="361" value="0">
  </div>

  <div class="slider-container">
    <label>PURPLE NEEDLE BODY</label>
    <input type="range" id="MFD_PURPLE_NEEDLE_BODY_SLIDER" min="-50" max="50" value="0">
  </div>

  <div class="slider-container">
    <label>PURPLE NEEDLE BODY (NUMBER)</label>
    <input id="MFD_PURPLE_NEEDLE_BODY_NUMBER" type="number" min="-50" max="50" value="0">
  </div>

  <div class="slider-container">
    <label>BLUE NEEDLE</label>
    <input type="range" id="MFD_BlUE_NEEDLE_SLIDER" min="0" max="360" value="0">
  </div>

  <div class="slider-container">
    <label>BLUE NEEDLE (NUMBER)</label>
    <input id="MFD_BlUE_NEEDLE_NUMBER" type="number" min="-1" max="361" value="0">
  </div>

  <div class="slider-container">
    <label>BLUE NEEDLE BODY</label>
    <input type="range" id="MFD_BlUE_NEEDLE_BODY_SLIDER" min="-50" max="50" value="0">
  </div>

  <div class="slider-container">
    <label>BLUE NEEDLE BODY (NUMBER)</label>
    <input id="MFD_BlUE_NEEDLE_BODY_NUMBER" type="number" min="-50" max="50" value="0">
  </div>

  <div class="slider-container">
    <label>GREEN NEEDLE</label>
    <input type="range" id="MFD_GREEN_NEEDLE_SLIDER" min="0" max="360" value="0">
  </div>

  <div class="slider-container">
    <label>GREEN NEEDLE (NUMBER)</label>
    <input id="MFD_GREEN_NEEDLE_NUMBER" type="number" min="-1" max="361" value="0">
  </div>

  <div class="slider-container">
    <label>YELLOW NEEDLE</label>
    <input type="range" id="MFD_YELLOW_NEEDLE_SLIDER" min="0" max="360" value="0">
  </div>

  <div class="slider-container">
    <label>YELLOW NEEDLE (NUMBER)</label>
    <input id="MFD_YELLOW_NEEDLE_NUMBER" type="number" min="-1" max="361" value="0">
  </div>

  <div class="slider-container">
    <label>WHITE NEEDLE</label>
    <input type="range" id="MFD_WHITE_NEEDLE_SLIDER" min="0" max="360" value="0">
  </div>

  <div class="slider-container">
    <label>WHITE NEEDLE (NUMBER)</label>
    <input id="MFD_WHITE_NEEDLE_NUMBER" type="number" min="-1" max="361" value="0">
  </div>

  <!-- HEADING ROTATION CONTROL -->
  <div class="slider-container">
    <label>HEADING ROTATE</label>
    <input id="MFD_HEADING_SLIDER" type="range" min="0" max="360" step="1" value="360">
  </div>

  <div class="slider-container">
    <label>HEADING ROTATE (NUMBER)</label>
    <input id="MFD_HEADING_NUMBER" type="number" min="-1" max="361" step="1" value="360">
  </div>

  <!-- HEADING BUG CONTROL -->
  <div class="slider-container">
    <label>HEADING BUG</label>
    <input type="range" id="MFD_HEADING_BUG_SLIDER" min="0" max="360" value="0">
  </div>

  <div class="slider-container">
    <label>HEADING BUG (NUMBER)</label>
    <input id="MFD_HEADING_BUG_NUMBER" type="number" min="-1" max="361" value="0">
  </div>

  <div class="slider-container">
    <button id="MFD_RandomizeButton">START RANDOMIZE</button>
  </div>

  <div class="slider-container">
    <button id="MFD_ResetAll">RESET ALL</button>
  </div>
</div>

`;