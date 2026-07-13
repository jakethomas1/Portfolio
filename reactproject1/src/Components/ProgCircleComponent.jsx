const ProgCircleComponent = ({ radius = 50, progress = 0, title = "placeholder", textsize="text-l"}) => {

    const r = radius;
    const c = 2 * Math.PI * r;
    const x = progress;
    const sw = 12;
    const w = 2 * r + sw;
    return (
        <svg width={w} height={w} viewBox={`0 0 ${w} ${w}`}>

            <circle
                cx={w / 2}
                cy={w / 2}
                r={r}
                fill="none"
                stroke="#e5e7eb"
                stroke-width={sw}
            />


            <circle
                cx={w / 2}
                cy={w / 2}
                r={r}
                fill="none"
                stroke="tomato"
                stroke-width={sw}
                stroke-linecap="butt"
                stroke-dasharray={c}
                stroke-dashoffset={c * (1 - x)}
                transform={`rotate(-90 ${w / 2} ${w / 2})`}
            />
            
            <text
                x={w / 2}
                y={w / 2}
                fill="#F15030"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-bold text-[] z-25"
            >
                <tspan x={w / 2} dy="-.4em" className={`${textsize}`}>{title}</tspan>
                <tspan x={w / 2} dy="2.0em" className={`text-l`}>{Math.round(x * 100)}%</tspan>
            </text>
        </svg>

    );
}

export default ProgCircleComponent;