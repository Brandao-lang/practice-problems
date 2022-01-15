// You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST. //


var insertIntoBST = function(root, val) {
    let inserted = false
    
    if (!root) {
        root = new TreeNode(val)
        return root
    } 
    
    let current = root
    let previous
    
    while (!inserted) {
        if (current === null) {
           if (val < previous.val) {
               previous.left = new TreeNode(val)
           }
           
           if (val > previous.val) {
               previous.right = new TreeNode(val)
           }
           inserted = true
           break
        }
        
       if (val > current.val) {
            previous = current
            current = current.right
            continue
        }
        
        if (val < current.val) {
            previous = current
            current = current.left
            continue
        }
    }
    
    return root
};