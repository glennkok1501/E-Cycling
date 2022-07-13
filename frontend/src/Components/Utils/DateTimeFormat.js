const formatDate = (date) => {
    var newDate = new Date(`${date.replace(/T/, ' ').replace(/\..+/, '').replaceAll('-', '/')} GMT`)
    const today = new Date()
    if (newDate.toLocaleDateString() === today.toLocaleDateString()) {
      return (newDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })).toString()
    }
    return `${(newDate.toLocaleDateString("en-US")).toString()} ${(newDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })).toString()}`
} 

export default formatDate