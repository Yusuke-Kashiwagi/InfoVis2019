Vec3 = function(x, y, z){
  this.x = parseInt(x);
  this.y = parseInt(y);
  this.z = parseInt(z);
}

Vec3.prototype.add = function(v){
  this.x += v.x;
  this.y += v.y;
  this.z += v.z;
  return this;
}

Vec3.prototype.sub = function(v){
  this.x -= v.x
  this.y -= v.y
  this.z -= v.z
  return this
}

Vec3.prototype.sum = function () {
  return this.x + this.y + this.z;
}

Vec3.prototype.min = function () {
  this.array = [this.x, this.y, this.z];
  this.array.sort(function(a, b){
    if(a<b) return -1;
    if(a>b) return 1;
    return 0;
  });
  return this.array[0];

}

Vec3.prototype.mid = function(){
  this.array = [this.x, this.y, this.z];
  this.array.sort(function(a, b){
    if(a<b) return -1;
    if(a>b) return 1;
    return 0;
  });
  return this.array[1];
}

Vec3.prototype.max = function(){
  this.array = [this.x, this.y, this.z];
  this.array.sort(function(a, b){
    if(a<b) return -1;
    if(a>b) return 1;
    return 0;
  });
  return this.array[2];
}

Vec3.prototype.return = function(){
  return [this.x, this.y, this.z];
}
