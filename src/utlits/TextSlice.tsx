
interface IProps{
text?:string
}
const TextSlice=({text}:IProps)=> {
  return (
    <>
    {text?.slice(0,80)}
    </>
  )
}

export default TextSlice