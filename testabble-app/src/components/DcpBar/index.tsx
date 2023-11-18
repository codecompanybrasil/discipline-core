import "./style.css"

type BarProps = {
    percent: number,
    colorProgress?: string,
    colorNoProgress?: string,
    width?: string,
    height?: string,
    spanPercent?: boolean
}

function Bar({percent, colorProgress = "var(--dcp-success-color)", colorNoProgress = "var(--dcp-danger-color)", width = "200px", height = "10px", spanPercent=false}: BarProps) {
    return (
        <div className="d-inline-flex align-content-center">
            <div className="bar" style={{width: width}}>
                <div className="bar-progress" style={{backgroundColor: colorProgress, width: `${percent}%`, height: height}} ></div>
                <div className="bar-progress" style={{backgroundColor: colorNoProgress, width: `${100 - percent}%`, height: height}}></div>
            </div>
            {spanPercent && (
                <span className="span-percent">{percent}%</span>
            )}
        </div>
    )
}

export {
    Bar
}