export default function ProgressCircle({location}) {

    if ( location === 'left' ) {
        return (
            <div className="progressCircle" style={{ marginLeft: -5 }}></div>
        )
    } else {
        return (
            <div className="progressCircle" style={{ marginRight: -5 }}></div>
        )
    }
}