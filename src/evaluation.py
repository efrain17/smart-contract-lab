import abc 
from typing import List
from abc import ABC, abstractmethod 
"""
This is the interface for the expression tree Node.
You should not remove it, and you can define some classes to implement it.
"""

class Node(ABC):
    @abstractmethod
    # define your fields here
    def evaluate(self) -> int:
        pass


class OperatorNode(Node):
    def _op_to_func(self, op):
        opts = {
            '+': lambda x,y: x+y,
            '*': lambda x,y : x*y,
            '/': lambda x,y : x//y, 
            '-': lambda x,y: x-y
        }
        return opts[op]
    
    def __init__(self, op, right=None, left=None):
        self.op = self._op_to_func(op)
        self.left = left
        self.right = right
        
    def evaluate(self):
        return self.op(self.left.evaluate(), self.right.evaluate())
        
class ValueNode(Node):
    def __init__(self, value):
        self.value = value
    
    def evaluate(self):
        return int(self.value)
    
"""    
This is the TreeBuilder class.
You can treat it as the driver code that takes the postinfix input
and returns the expression tree represnting it as a Node.
"""

class TreeBuilder(object):
    def buildTree(self, postfix: List[str]) -> 'Node':
        if postfix:
            element = postfix.pop()
            if element in ('*', '+', '/', '-'):
                print("operator")
                return OperatorNode(element, self.buildTree(postfix), self.buildTree(postfix))
            else:
                print("value")
                return ValueNode(element)

obj = TreeBuilder()
expTree = obj.buildTree(["3","4","+","2","*","7", "/"])
print(dir(expTree.op))
ans = expTree.evaluate()