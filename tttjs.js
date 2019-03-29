function restart(){
  location.reload();
}
var turn=0,game_stop=0,id=[0,0,0,0,0,0,0,0,0];
var win=[];
function f0(){
  if(game_stop==0)
  {
  if(id[0]==0)
  {
  if(turn%2==0)
  {
  document.getElementById("0").src='red-x.png';
  turn+=1;
  id[0]+=1;
  win[0]=1;
}
else {
  document.getElementById("0").src='black-o.png';
  turn+=1;
  id[0]+=1;
  win[0]=0;
}}

if((win[0]==0 && win[3]==0 && win[6]==0)
|| (win[0]==0 && win[1]==0 && win[2]==0)
|| (win[0]==0 && win[4]==0 && win[8]==0)
|| (win[1]==0 && win[4]==0 && win[7]==0)
|| (win[2]==0 && win[5]==0 && win[8]==0)
|| (win[3]==0 && win[4]==0 && win[5]==0)
|| (win[6]==0 && win[7]==0 && win[8]==0)
|| (win[2]==0 && win[4]==0 && win[6]==0))
{
document.getElementById("result").innerHTML="O wins";
game_stop=1;
}

else
if((win[0]==1 && win[3]==1 && win[6]==1)
|| (win[0]==1 && win[1]==1 && win[2]==1)
|| (win[0]==1 && win[4]==1 && win[8]==1)
|| (win[1]==1 && win[4]==1 && win[7]==1)
|| (win[2]==1 && win[5]==1 && win[8]==1)
|| (win[3]==1 && win[4]==1 && win[5]==1)
|| (win[6]==1 && win[7]==1 && win[8]==1)
|| (win[2]==1 && win[4]==1 && win[6]==1))
{
document.getElementById("result").innerHTML="X wins";
game_stop=1;
}

else if(turn==9)
document.getElementById("result").innerHTML="Draw";
}
else alert("Match Over. Click on 'Restart Game' to play again");
}


function f1(){
  if(game_stop==0)
  {
    if(id[1]==0)
    {
      if(turn%2==0)
      {
        document.getElementById("1").src='red-x.png';
        turn+=1;
        id[1]+=1;
        win[1]=1;
      }
      else {
        document.getElementById("1").src='black-o.png';
        turn+=1;
        id[1]+=1;
        win[1]=0;
      }}

      if((win[0]==0 && win[3]==0 && win[6]==0)
      || (win[0]==0 && win[1]==0 && win[2]==0)
      || (win[0]==0 && win[4]==0 && win[8]==0)
      || (win[1]==0 && win[4]==0 && win[7]==0)
      || (win[2]==0 && win[5]==0 && win[8]==0)
      || (win[3]==0 && win[4]==0 && win[5]==0)
      || (win[6]==0 && win[7]==0 && win[8]==0)
      || (win[2]==0 && win[4]==0 && win[6]==0))
      {
        document.getElementById("result").innerHTML="O wins";
        game_stop=1;
      }

      else
      if((win[0]==1 && win[3]==1 && win[6]==1)
      || (win[0]==1 && win[1]==1 && win[2]==1)
      || (win[0]==1 && win[4]==1 && win[8]==1)
      || (win[1]==1 && win[4]==1 && win[7]==1)
      || (win[2]==1 && win[5]==1 && win[8]==1)
      || (win[3]==1 && win[4]==1 && win[5]==1)
      || (win[6]==1 && win[7]==1 && win[8]==1)
      || (win[2]==1 && win[4]==1 && win[6]==1))
      {
        document.getElementById("result").innerHTML="X wins";
        game_stop=1;
      }

      else if(turn==9)
      document.getElementById("result").innerHTML="Draw";
    }
    else alert("Match Over. Click on 'Restart Game' to play again");
}


function f2(){
  if(game_stop==0)
  {
if(id[2]==0)
{
if(turn%2==0)
{
document.getElementById("2").src='red-x.png';
turn+=1;
id[2]+=1;
win[2]=1;
}
else {
document.getElementById("2").src='black-o.png';
turn+=1;
id[2]+=1;
win[2]=0;
}}
if((win[0]==0 && win[3]==0 && win[6]==0)
|| (win[0]==0 && win[1]==0 && win[2]==0)
|| (win[0]==0 && win[4]==0 && win[8]==0)
|| (win[1]==0 && win[4]==0 && win[7]==0)
|| (win[2]==0 && win[5]==0 && win[8]==0)
|| (win[3]==0 && win[4]==0 && win[5]==0)
|| (win[6]==0 && win[7]==0 && win[8]==0)
|| (win[2]==0 && win[4]==0 && win[6]==0))
{
document.getElementById("result").innerHTML="O wins";
game_stop=1;
}

else
if((win[0]==1 && win[3]==1 && win[6]==1)
|| (win[0]==1 && win[1]==1 && win[2]==1)
|| (win[0]==1 && win[4]==1 && win[8]==1)
|| (win[1]==1 && win[4]==1 && win[7]==1)
|| (win[2]==1 && win[5]==1 && win[8]==1)
|| (win[3]==1 && win[4]==1 && win[5]==1)
|| (win[6]==1 && win[7]==1 && win[8]==1)
|| (win[2]==1 && win[4]==1 && win[6]==1))
{
document.getElementById("result").innerHTML="X wins";
game_stop=1;
}

else if(turn==9)
document.getElementById("result").innerHTML="Draw";
}
else alert("Match Over. Click on 'Restart Game' to play again");
}


function f3(){
  if(game_stop==0)
  {
if(id[3]==0)
{
if(turn%2==0)
{
document.getElementById("3").src='red-x.png';
turn+=1;
id[3]+=1;
win[3]=1;
}
else {
document.getElementById("3").src='black-o.png';
turn+=1;
id[3]+=1;
win[3]=0;
}}
if((win[0]==0 && win[3]==0 && win[6]==0)
|| (win[0]==0 && win[1]==0 && win[2]==0)
|| (win[0]==0 && win[4]==0 && win[8]==0)
|| (win[1]==0 && win[4]==0 && win[7]==0)
|| (win[2]==0 && win[5]==0 && win[8]==0)
|| (win[3]==0 && win[4]==0 && win[5]==0)
|| (win[6]==0 && win[7]==0 && win[8]==0)
|| (win[2]==0 && win[4]==0 && win[6]==0))
{
document.getElementById("result").innerHTML="O wins";
game_stop=1;
}

else
if((win[0]==1 && win[3]==1 && win[6]==1)
|| (win[0]==1 && win[1]==1 && win[2]==1)
|| (win[0]==1 && win[4]==1 && win[8]==1)
|| (win[1]==1 && win[4]==1 && win[7]==1)
|| (win[2]==1 && win[5]==1 && win[8]==1)
|| (win[3]==1 && win[4]==1 && win[5]==1)
|| (win[6]==1 && win[7]==1 && win[8]==1)
|| (win[2]==1 && win[4]==1 && win[6]==1))
{
document.getElementById("result").innerHTML="X wins";
game_stop=1;
}

else if(turn==9)
document.getElementById("result").innerHTML="Draw";
}
else alert("Match Over. Click on 'Restart Game' to play again");
}


function f4(){
  if(game_stop==0)
  {
if(id[4]==0)
{
if(turn%2==0)
{
document.getElementById("4").src='red-x.png';
turn+=1;
id[4]+=1;
win[4]=1;
}
else {
document.getElementById("4").src='black-o.png';
turn+=1;
id[4]+=1;
win[4]=0;
}}
if((win[0]==0 && win[3]==0 && win[6]==0)
|| (win[0]==0 && win[1]==0 && win[2]==0)
|| (win[0]==0 && win[4]==0 && win[8]==0)
|| (win[1]==0 && win[4]==0 && win[7]==0)
|| (win[2]==0 && win[5]==0 && win[8]==0)
|| (win[3]==0 && win[4]==0 && win[5]==0)
|| (win[6]==0 && win[7]==0 && win[8]==0)
|| (win[2]==0 && win[4]==0 && win[6]==0))
{
document.getElementById("result").innerHTML="O wins";
game_stop=1;
}

else
if((win[0]==1 && win[3]==1 && win[6]==1)
|| (win[0]==1 && win[1]==1 && win[2]==1)
|| (win[0]==1 && win[4]==1 && win[8]==1)
|| (win[1]==1 && win[4]==1 && win[7]==1)
|| (win[2]==1 && win[5]==1 && win[8]==1)
|| (win[3]==1 && win[4]==1 && win[5]==1)
|| (win[6]==1 && win[7]==1 && win[8]==1)
|| (win[2]==1 && win[4]==1 && win[6]==1))
{
document.getElementById("result").innerHTML="X wins";
game_stop=1;
}

else if(turn==9)
document.getElementById("result").innerHTML="Draw";
}
else alert("Match Over. Click on 'Restart Game' to play again");
}


function f5(){
  if(game_stop==0)
  {
if(id[5]==0)
{
if(turn%2==0)
{
document.getElementById("5").src='red-x.png';
turn+=1;
id[5]+=1;
win[5]=1;
}
else {
document.getElementById("5").src='black-o.png';
turn+=1;
id[5]+=1;
win[5]=0;
}}
if((win[0]==0 && win[3]==0 && win[6]==0)
|| (win[0]==0 && win[1]==0 && win[2]==0)
|| (win[0]==0 && win[4]==0 && win[8]==0)
|| (win[1]==0 && win[4]==0 && win[7]==0)
|| (win[2]==0 && win[5]==0 && win[8]==0)
|| (win[3]==0 && win[4]==0 && win[5]==0)
|| (win[6]==0 && win[7]==0 && win[8]==0)
|| (win[2]==0 && win[4]==0 && win[6]==0))
{
document.getElementById("result").innerHTML="O wins";
game_stop=1;
}

else
if((win[0]==1 && win[3]==1 && win[6]==1)
|| (win[0]==1 && win[1]==1 && win[2]==1)
|| (win[0]==1 && win[4]==1 && win[8]==1)
|| (win[1]==1 && win[4]==1 && win[7]==1)
|| (win[2]==1 && win[5]==1 && win[8]==1)
|| (win[3]==1 && win[4]==1 && win[5]==1)
|| (win[6]==1 && win[7]==1 && win[8]==1)
|| (win[2]==1 && win[4]==1 && win[6]==1))
{
document.getElementById("result").innerHTML="X wins";
game_stop=1;
}

else if(turn==9)
document.getElementById("result").innerHTML="Draw";
}
else alert("Match Over. Click on 'Restart Game' to play again");;
}


function f6(){
  if(game_stop==0)
  {
if(id[6]==0)
{
if(turn%2==0)
{
document.getElementById("6").src='red-x.png';
turn+=1;
id[6]+=1;
win[6]=1;
}
else {
document.getElementById("6").src='black-o.png';
turn+=1;
id[6]+=1;
win[6]=0;
}}
if((win[0]==0 && win[3]==0 && win[6]==0)
|| (win[0]==0 && win[1]==0 && win[2]==0)
|| (win[0]==0 && win[4]==0 && win[8]==0)
|| (win[1]==0 && win[4]==0 && win[7]==0)
|| (win[2]==0 && win[5]==0 && win[8]==0)
|| (win[3]==0 && win[4]==0 && win[5]==0)
|| (win[6]==0 && win[7]==0 && win[8]==0)
|| (win[2]==0 && win[4]==0 && win[6]==0))
{
document.getElementById("result").innerHTML="O wins";
game_stop=1;
}

else
if((win[0]==1 && win[3]==1 && win[6]==1)
|| (win[0]==1 && win[1]==1 && win[2]==1)
|| (win[0]==1 && win[4]==1 && win[8]==1)
|| (win[1]==1 && win[4]==1 && win[7]==1)
|| (win[2]==1 && win[5]==1 && win[8]==1)
|| (win[3]==1 && win[4]==1 && win[5]==1)
|| (win[6]==1 && win[7]==1 && win[8]==1)
|| (win[2]==1 && win[4]==1 && win[6]==1))
{
document.getElementById("result").innerHTML="X wins";
game_stop=1;
}

else if(turn==9)
document.getElementById("result").innerHTML="Draw";
}
else alert("Match Over. Click on 'Restart Game' to play again");
}


function f7(){
  if(game_stop==0)
  {
if(id[7]==0)
{
if(turn%2==0)
{
document.getElementById("7").src='red-x.png';
turn+=1;
id[7]+=1;
win[7]=1;
}
else {
document.getElementById("7").src='black-o.png';
turn+=1;
id[7]+=1;
win[7]=0;
}}
if((win[0]==0 && win[3]==0 && win[6]==0)
|| (win[0]==0 && win[1]==0 && win[2]==0)
|| (win[0]==0 && win[4]==0 && win[8]==0)
|| (win[1]==0 && win[4]==0 && win[7]==0)
|| (win[2]==0 && win[5]==0 && win[8]==0)
|| (win[3]==0 && win[4]==0 && win[5]==0)
|| (win[6]==0 && win[7]==0 && win[8]==0)
|| (win[2]==0 && win[4]==0 && win[6]==0))
{
document.getElementById("result").innerHTML="O wins";
game_stop=1;
}

else
if((win[0]==1 && win[3]==1 && win[6]==1)
|| (win[0]==1 && win[1]==1 && win[2]==1)
|| (win[0]==1 && win[4]==1 && win[8]==1)
|| (win[1]==1 && win[4]==1 && win[7]==1)
|| (win[2]==1 && win[5]==1 && win[8]==1)
|| (win[3]==1 && win[4]==1 && win[5]==1)
|| (win[6]==1 && win[7]==1 && win[8]==1)
|| (win[2]==1 && win[4]==1 && win[6]==1))
{
document.getElementById("result").innerHTML="X wins";
game_stop=1;
}

else if(turn==9)
document.getElementById("result").innerHTML="Draw";
}
else alert("Match Over. Click on 'Restart Game' to play again");
}


function f8(){
  if(game_stop==0)
  {
if(id[8]==0)
{
if(turn%2==0)
{
document.getElementById("8").src='red-x.png';
turn+=1;
id[8]+=1;
win[8]=1;
}
else {
document.getElementById("8").src='black-o.png';
turn+=1;
id[8]+=1;
win[8]=0;
}}
if((win[0]==0 && win[3]==0 && win[6]==0)
|| (win[0]==0 && win[1]==0 && win[2]==0)
|| (win[0]==0 && win[4]==0 && win[8]==0)
|| (win[1]==0 && win[4]==0 && win[7]==0)
|| (win[2]==0 && win[5]==0 && win[8]==0)
|| (win[3]==0 && win[4]==0 && win[5]==0)
|| (win[6]==0 && win[7]==0 && win[8]==0)
|| (win[2]==0 && win[4]==0 && win[6]==0))
{
document.getElementById("result").innerHTML="O wins";
game_stop=1;
}

else
if((win[0]==1 && win[3]==1 && win[6]==1)
|| (win[0]==1 && win[1]==1 && win[2]==1)
|| (win[0]==1 && win[4]==1 && win[8]==1)
|| (win[1]==1 && win[4]==1 && win[7]==1)
|| (win[2]==1 && win[5]==1 && win[8]==1)
|| (win[3]==1 && win[4]==1 && win[5]==1)
|| (win[6]==1 && win[7]==1 && win[8]==1)
|| (win[2]==1 && win[4]==1 && win[6]==1))
{
document.getElementById("result").innerHTML="X wins";
game_stop=1;
}

else if(turn==9)
document.getElementById("result").innerHTML="Draw";
}
else alert("Match Over. Click on 'Restart Game' to play again");
}
