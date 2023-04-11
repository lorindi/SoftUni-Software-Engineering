function sprintReview(array) {
  let number = Number(array.shift());
  let sprint = {};

  for (let i = 0; i < number; i++) {
    let [assignee, taskId, title, status, estimatedPoints] = array
      .shift()
      .split(":");

    if (!sprint.hasOwnProperty(assignee)) {
      sprint[assignee] = [{ taskId, title, status, estimatedPoints }];
    } 
    else {
      sprint[assignee].push({ taskId, title, status, estimatedPoints });
    }
  }


  while (array.length != 0) {

    let [command, ...data] = array.shift().split(":");


    if (command === "Add New") {
      let [assignee, taskId, title, status, estimatedPoints] = data;

      if (sprint.hasOwnProperty(assignee)) {
        sprint[assignee].push({ taskId, title, status, estimatedPoints });
      } 
      else {
        console.log(`Assignee ${assignee} does not exist on the board!`);
      }


    } else if (command === "Change Status") {
      let [assignee, taskId, newStatus] = data;

      if (sprint.hasOwnProperty(assignee)) {
        let isValid = true;
        
        for (const item of sprint[assignee]) {
          if (item.taskId == taskId) {
            item.status = newStatus;
            isValid = false;
            
          }
        }

        if (isValid) {
          console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
        }
      }
      else {
        console.log(`Assignee ${assignee} does not exist on the board!`);
      }


    } else if (command === "Remove Task") {

      let [assignee, index] = data;

      if (sprint.hasOwnProperty(assignee)) {
       
        if (index >= 0 && index < sprint[assignee].length) {
          sprint[assignee].splice(Number(index), 1);
        } 
        else {
          console.log(`Index is out of range!`);
        }
      } 
      else {
        console.log(`Assignee ${assignee} does not exist on the board!`);
      }
    }
  }

  let toDo = 0;
  let inProgress = 0;
  let codeReview = 0;
  let donePoints = 0;

  for (const items of Object.values(sprint)) {
    
    for (item of items) {
      
      if (item.status == "ToDo") {
        toDo += Number(item.estimatedPoints);
      } 
      else if (item.status == "In Progress") {
        inProgress += Number(item.estimatedPoints);
      } 
      else if (item.status == "Code Review") {
        codeReview += Number(item.estimatedPoints);
      } 
      else if (item.status == "Done") {
        donePoints += Number(item.estimatedPoints);
      }
    }
  }
  console.log(`ToDo: ${toDo}pts`);
  console.log(`In Progress: ${inProgress}pts`);
  console.log(`Code Review: ${codeReview}pts`);
  console.log(`Done Points: ${donePoints}pts`);

  if (toDo + inProgress + codeReview <= donePoints) {
    console.log(`Sprint was successful!`);
  } 
  else {
    console.log(`Sprint was unsuccessful...`);
  }
}
sprintReview([
  '4',
  'Kiril:BOP-1213:Fix Typo:Done:1',
  'Peter:BOP-1214:New Products Page:In Progress:2',
  'Mariya:BOP-1215:Setup Routing:ToDo:8',
  'Georgi:BOP-1216:Add Business Card:Code Review:3',
  'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
  'Change Status:Georgi:BOP-1216:Done',
  'Change Status:Will:BOP-1212:In Progress',
  'Remove Task:Georgi:3',
  'Change Status:Mariya:BOP-1215:Done',
]);
