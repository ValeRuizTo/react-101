export function Button(props){

    // eslint-disable-next-line react/prop-types
    return <button className="border p-2" onClick={props.callback}>{props.label}</button>
}