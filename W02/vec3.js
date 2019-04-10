Vec3 = function(x, y, z){
  this.x = x;
  this.y = y;
  this.z = z;
  this.array = [x, y, z];
}

Vec3.prototype.add = function(v){
  this.x += v.x;
  this.y += v.y;
  this.z += v.z;
  return this;
}

Vec3.prototype.sum = function () {
  return this.x + this.y + this.z;
}

Vec3.prototype.min = function () {
  this.array.sort(function(a, b){
    if(a<b) return -1;
    if(a>b) return 1;
    return 0;
  });
  return this.array[0];

}

Vec3.prototype.mid = function(){
  this.array.sort(function(a, b){
    if(a<b) return -1;
    if(a>b) return 1;
    return 0;
  });
  return this.array[1];
}

Vec3.prototype.max = function(){
  this.array.sort(function(a, b){
    if(a<b) return -1;
    if(a>b) return 1;
    return 0;
  });
  return this.array[2];
}

Vec3.prototype.resetArray = function(){
  this.array = [this.x, this.y, this.z];
}
