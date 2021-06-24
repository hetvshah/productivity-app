import { GrCheckmark } from 'react-icons/gr';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsFillTrashFill, BsPlayFill } from 'react-icons/bs';
import { IoMdPause } from 'react-icons/io';
import './Styles.css';
import moment from 'moment';

const OngoingTasks = ({ ongoingTasks, onMove, onDelete, onPause }) => {
  var start, end;
  const filteredTasks = ongoingTasks.filter((task) => task.displayTask);

  // var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
  // starCountRef.on('value', (snapshot) => {
  //   const data = snapshot.val();
  //   updateStarCount(postElement, data);
  // });

  if (filteredTasks.length > 0) {
    // setPlay(true);
    const listOngoingTasks = filteredTasks.map((task) => (
      <div className="todo">
        <div>
          <h3>{task.title}</h3>
          <p>
            {task.specificTime
              ? task.start === '' && task.end === ''
                ? ''
                : new Date(task.start).toDateString() ===
                  new Date(task.end).toDateString()
                ? '(Due) Date: ' +
                  moment(new Date(task.start)).format('MMMM Do [at] LT')
                : '(Due) Date: ' +
                  moment(new Date(task.start)).format('MMMM Do [at] LT') +
                  ' to ' +
                  moment(new Date(task.end)).format('MMMM Do [at] LT')
              : task.start === '' && task.end === ''
              ? ''
              : new Date(task.start).toDateString() ===
                new Date(task.end).toDateString()
              ? '(Due) Date: ' + moment(new Date(task.start)).format('MMMM Do')
              : '(Due) Date: ' +
                moment(new Date(task.start)).format('MMMM Do') +
                ' to ' +
                moment(new Date(task.end)).format('MMMM Do')}
          </p>
          <p>{task.notes === '' ? '' : 'Notes: ' + task.notes}</p>
        </div>

        <div className="times">
          {/* {console.log(task.timeSpent)} */}
          {/* {task.estimate === '' ? 'N/A' : task.estimate} */}
          {task.estimateHours === 0 && task.estimateMin !== 0
            ? task.estimateMin + 'm / '
            : task.estimateHours !== 0 && task.estimateMin === 0
            ? task.estimateHours + 'h / '
            : task.estimateHours === 0 && task.estimateMin === 0
            ? '- / '
            : task.estimateHours + 'h ' + task.estimateMin + 'm / '}
          {task.timeSpent === 0
            ? '-'
            : Math.round(task.timeSpent) % 60 === 0
            ? Math.floor(Math.round(task.timeSpent) / 60) + 'h'
            : task.timeSpent >= 60
            ? Math.floor(Math.round(task.timeSpent) / 60) +
              'h ' +
              (Math.round(task.timeSpent) % 60) +
              'm'
            : (Math.round(task.timeSpent) % 60) + 'm'}
        </div>
        <div className="todo-icons">
          <BsPlayFill
            className="ongoing-task"
            onClick={() => {
              console.log('working on ' + task.title);
              start = new Date();
            }}
          />
          <IoMdPause
            className="ongoing-task"
            onClick={() => {
              console.log('stopped working on ' + task.title);
              end = new Date();
              // console.log(end - start);
              onPause(task, (end - start) / 60000);
            }}
          />

          <GrCheckmark className="ongoing-task" onClick={() => onMove(task)} />
          {/* <AiOutlineEdit className="ongoing-task" /> */}
          <BsFillTrashFill
            className="ongoing-task trash"
            onClick={() => onDelete(task)}
          />
        </div>
      </div>
    ));

    return <>{listOngoingTasks}</>;
  }

  return 'No tasks to show.';
};

export default OngoingTasks;
