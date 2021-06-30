var v1= [5,4,0]
var v2= [8,-10,0]
var ortho= 0
function dotProduct( v1, v2){
	var vectors;
  var sum=0
  for(var i=0;i<v1.length;i++){
  vectors= v1[i]*v2[i]
  sum+=vectors
  }
  return sum

}
var ortho= dotProduct(v1,v2)
console.log(ortho)
if(ortho==0){
	console.log("these vectors are orthogonal")
}
else{
	console.log("these vectors are not orthogonal")
}