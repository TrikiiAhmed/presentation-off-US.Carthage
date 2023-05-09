var counter=0


 var players={
 player1:{name:'rahma',lastName:'Ben slimane',height:'1.88',playerposition:'setter',playerNumber:3,'image':'p1.jpg'},
 player2:{name:'Ele',lastName:'essid',height:'1.83',playerPosition:'opposite attack',playerNumber:17,'image':'p2.jpg'},
 player3:{name:'Sondes',lastName:'Sassi',height:'1.70',playerposition:'setter',playerNumber:18,'image':'p3.jpg'},
 player4:{name:'tasnim',lastName:'bechiekh',height:'1.78',playerposition:'attacking receiver',playerNumber:12,'image':'p4.jpg'},
 player5:{name:'ele',lastName:'rezgui',height:'1.89',playerposition:'attacking receiver',playerNumber:7,'image':'p5.jpg'},
 player6:{name:'Nermine',lastName:'bHamza',height:'1.75',playerposition:'middle blocker',playerNumber:1,'image':'p6.jpg'},
 player7:{name:'Yasmine',lastName:'salhi',height:'1.77',playerposition:'middle blocker',playerNumber:2,'image':'p7.jpg'},
 player8:{name:'oumaima',lastName:'jalel',height:'1.73',playerposition:'libero',playerNumber:20,'image':'p8.jpg'} ,
}

function PlayerListing() {
    for (i in players){
        console.log(i)
    }
}

function NextElement() { 
    counter = (counter+1) % 8
    console.log(players[Object.keys(players)[counter]]['image'])
    console.log($('#player_image').attr('src')) 
    $('#player_image').attr('src',players[Object.keys(players)[counter]]['image'])
     
}

function PrevElement() { 
    counter = (counter - 1) 
    if (counter == -1)
    {counter = 7 }
    console.log(Object.keys(players)[counter])
    $('#player_image').attr('src',players[Object.keys(players)[counter]]['image'])
      
}

function each(coll, func) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        func(coll[i], i);
      }
    } else {
      for (var key in coll) {
        func(coll[key], key);
      }
    }
  }
  
  function map(coll, func) {
    var acc = [];
    if (!Array.isArray(coll)) {
      acc = {};
    }
    each(coll, function (element, key) {
      acc[key] = func(element, key);
    });
    return acc;
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, index) {
      // notice we added the index here
      if (predicate(element, index)) {
        // notice we added the index here
        acc.push(element);
      }
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function (element, i) {
      acc = f(acc, element, i);
    });
}


function select(){
    return filter (players,function(ul){
         $("#b3").value === ul.name
         return ul
    })
}
