import React, { Component } from 'react'
import hyperx from 'hyperx'
import './Clock.css'

let hx = hyperx(React.createElement)

class Clock extends Component {
  render () {
    const { time } = this.props
    return hx`
<pre>
<span class="on">IT</span>L<span class="on">IS</span>BFAMPM
<span class="${time.quarter ? 'on' : ''}">A</span>C<span class="${time.quarter ? 'on' : ''}">QUARTER</span>DC
<span class="${time.twentyMinutes ? 'on' : ''}">TWENTY</span><span class="${time.fiveMinutes ? 'on' : ''}">FIVE</span>X
<span class="${time.half ? 'on' : ''}">HALF</span>B<span class="${time.tenMinutes ? 'on' : ''}">TEN</span>F<span class="${time.to ? 'on' : ''}">TO</span>
<span class="${time.past ? 'on' : ''}">PAST</span>ERU<span class="${time.h == 9 ? 'on' : ''}">NINE</span>
<span class="${time.h == 1 ? 'on' : ''}">ONE</span><span class="${time.h == 6 ? 'on' : ''}">SIX</span><span class="${time.h == 3 ? 'on' : ''}">THREE</span>
<span class="${time.h == 4 ? 'on' : ''}">FOUR</span><span class="${time.h == 5 ? 'on' : ''}">FIVE</span><span class="${time.h == 2 ? 'on' : ''}">TWO</span>
<span class="${time.h == 8 ? 'on' : ''}">EIGHT</span><span class="${time.h == 11 ? 'on' : ''}">ELEVEN</span>
<span class="${time.h == 7 ? 'on' : ''}">SEVEN</span><span class="${time.h == 0 ? 'on' : ''}">TWELVE</span>
<span class="${time.h == 10 ? 'on' : ''}">TEN</span>SE<span class="${time.oclock ? 'on' : ''}">OCLOCK</span>
<span class="${time.oneMinute ? 'on' : ''}">.</span>  <span class="${time.twoMinutes ? 'on' : ''}">.</span>  <span class="${time.threeMinutes ? 'on' : ''}">.</span>  <span class="${time.fourMinutes ? 'on' : ''}">.</span>
</pre>`
  }
}

export default Clock
