// addint the task:
// targeted "btn" class on  "add tasj" button
$(".btn").on("click", function() {
  var newTask = prompt("What is the next task");
  console.log("newTask:", newTask);
  // placing newTask into HTML
  var addedTask =
    "<li><span>" +
    newTask +
    '</span><i class="fa fa-trash-o"aria-hidden="true"></i></li>';
  //targeting "ul" with a id"task-list" and appending the addedTask
  $("#task-list").append(addedTask);
});

//deleting the task:
//targeting "fa" class on the trash can
$(".fa").click(function() {
  //console.log("trash")
  // targeting the parent elemnt of the "trash can" and applying.remove() method on it
  $(this)
    .parent()
    .remove();
});
