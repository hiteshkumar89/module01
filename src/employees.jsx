let sally = 'Sally Smith'
let mark = 'Mark Martin'
let holly = 'Holly Unlikely'
let amol = 'Amol Shookup'
let hitesh = 'Hiteshkumar Patel'
let charmi = 'Charmi Patel'
const element = (
    <ul style={{'color':'blue', 'fontSize': '24px'}}>
        <li>{sally}</li>
        <li>{mark}</li>
        <li>{holly}</li>
        <li>{amol}</li>
        <li>{hitesh}</li>
        <li>{charmi}</li>
    </ul>
)
ReactDOM.render(element,document.getElementById('content'))