
const handleDelete = (array, idx, setUseState) => {


    const newArray = array.filter((arr, index) => index !== idx)

    setUseState(newArray)


}

export default handleDelete