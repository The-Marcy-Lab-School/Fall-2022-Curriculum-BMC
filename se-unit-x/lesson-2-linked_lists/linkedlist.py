# Question 1: Implement a Linked List

class Node:
    def __init__(self, data=None):
        pass

    def __repr__(self):
        pass

class LinkedList:
    def __init__(self):
        pass

    def __repr__(self):
        pass

    def __len__(self):
        pass

    def __iter__(self):
        pass

    def __contains__(self, data):
        pass

    def append(self, data):
        pass

    def delete(self, node):
        pass

# Question 2: Cycle Check
def is_cyclic(head: Node) -> bool:
    pass

# Question 3: Reverse a Linked List
def reverse(head: Node) -> Node:
    pass

# Question 4: Merge Two Lists
def merge_two_list(l1: Node, l2: Node) -> Node:
    pass

# Question 5: Remove duplicates
def remove_dups(head: Node) -> Node:
    pass

if __name__ == "__main__":
    list1 = SinglyLinkedList(range(0, 100, 10))
    print(list1) # testing repr
    print(50 in list1, 110 not in list1) # testing contains
    list1.delete(50) # testing delete
    print(len(list1) == 9, 50 not in list1) # testing size