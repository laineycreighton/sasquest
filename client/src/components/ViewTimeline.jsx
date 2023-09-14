import { useQuery } from '@apollo/client';
import TimelineDashboard from '../components/TimelineDashboard';
import { QUERY_TIMELINE } from '../utils/queries';

const ViewTimeline = () => {
  const { loading, data } = useQuery(QUERY_TIMELINE);
  const timelines = data?.timeline || [];

  return (

        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <TimelineDashboard timelines={timelines}/>
          )}
        </div>
  );
};

export default ViewTimeline;