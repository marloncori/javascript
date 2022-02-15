const robot = {
     name: "RM-347",
     function: "osbstacle avoider",
     model: "differential drive",
     board: "Odroid C1",
     middleware: "ROS Melodic",
     battery: "Li-on 3.7 V"
}

console.log(Object.values(robot));
//output > (6) ['RM-347', 'osbstacle avoider', 'differential drive', 'Odroid C1', 'ROS Melodic', 'Li-on 3.7 V']

console.log(Object.keys(robot));
//output > (6) ['name', 'function', 'model', 'board', 'middleware', 'battery']
