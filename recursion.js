function recursion(tree){
   if(!tree.left && !tree.right){
       return [[tree.value]];
   }

   const left = recursion(tree.left);
   const right = recursion(tree.right);

   let result = [];

   result.push([tree.value]);

   for (let i = 0; i < left.length; i++) {
       const element = left[i];
       result.push(element.concat(right[i]));
   }
   return result;
}