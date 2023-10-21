export default function CmpB ({ cb }) {
    const cbVlaue = cb();
    return (
        <h2>{cbVlaue}</h2>
    )
}
