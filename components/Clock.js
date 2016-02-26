import React, { Component } from 'react'
import './Clock.css'

class Clock extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { time } = this.props
    return (
<pre>
<span className="on">IT</span>L<span className="on">IS</span>BFAMPM<br/>
<span className={time.quarter ? 'on' : ''}>A</span>C<span className={time.quarter ? 'on' : ''}>QUARTER</span>DC<br/>
<span className={time.twentyMinutes ? 'on' : ''}>TWENTY</span><span className={time.fiveMinutes ? 'on' : ''}>FIVE</span>X<br/>
<span className={time.half ? 'on' : ''}>HALF</span>B<span className={time.tenMinutes ? 'on' : ''}>TEN</span>F<span className={time.to ? 'on' : ''}>TO</span><br/>
<span className={time.past ? 'on' : ''}>PAST</span>ERU<span className={time.h == 9 ? 'on' : ''}>NINE</span><br/>
<span className={time.h == 1 ? 'on' : ''}>ONE</span><span className={time.h == 6 ? 'on' : ''}>SIX</span><span className={time.h == 3 ? 'on' : ''}>THREE</span><br/>
<span className={time.h == 4 ? 'on' : ''}>FOUR</span><span className={time.h == 5 ? 'on' : ''}>FIVE</span><span className={time.h == 2 ? 'on' : ''}>TWO</span><br/>
<span className={time.h == 8 ? 'on' : ''}>EIGHT</span><span className={time.h == 11 ? 'on' : ''}>ELEVEN</span><br/>
<span className={time.h == 7 ? 'on' : ''}>SEVEN</span><span className={time.h == 0 ? 'on' : ''}>TWELVE</span><br/>
<span className={time.h == 10 ? 'on' : ''}>TEN</span>SE<span className={time.oclock ? 'on' : ''}>OCLOCK</span><br/>
<span className={time.oneMinute ? 'on' : ''}>.</span>  <span className={time.twoMinutes ? 'on' : ''}>.</span>  <span className={time.threeMinutes ? 'on' : ''}>.</span>  <span className={time.fourMinutes ? 'on' : ''}>.</span>
</pre>
    )
  }
}

export default Clock
