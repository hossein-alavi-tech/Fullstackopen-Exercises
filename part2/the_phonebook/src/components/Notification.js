const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
    const notifStyle = message[1]==='error' ? {color: 'red'} : {color: 'green'}
    return (
      <div className='message' style={notifStyle}>
        {message[0]}
      </div>
    )
  }

  export default Notification