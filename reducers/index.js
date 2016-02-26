const initialState = new Date()

export default function counter (state = initialState, action) {
  switch (action.type) {
    case 'TICK':
      const now = new Date()
      return now
    default:
      return state
  }
}

