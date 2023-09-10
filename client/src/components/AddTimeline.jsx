// BELONGS TO:
//      - Timeline.jsx
//
//
// FUNCTIONALITY:
//      - POST ROUTE for a new timeline:
//                      01. Date
//                      02. Goal
//
//
// VISUAL:
//      - renders a form for a new timeline goal
//                               01. date
//                               02. goal
//                               03. new button - (window.location.reload())

const NewTimeline = () => {
    const [timelineDate, setTimelineDate] = useState('')
    const [timelineGoal, setTimelineGoal] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/timeline', { timelineDate })
            .then(() => {
                window.location.reload();
            });
        axios.post('/api/timeline', { timelineGoal})
        .then(() => {
                window.location.reload();
        });    
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="timelineDate">Date</label>
                <input type="Date" id="date" on onChange={(e) => setTimelineDate(e.target.value)} />
                <label htmlFor="timelineGoal">Goal</label>
                <input type="text" id="goal" on onChange={(e) => setTimelineGoal(e.target.value)} />
                <input type="submit" value="New" />
            </form>
        </div>
    );
};

export default NewTimeline;
