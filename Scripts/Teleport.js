var xDist : int = 0;
var yDist : int = 0;
function OnTriggerStay2D(other: Collider2D) {
    other.attachedRigidbody.GetComponent(Transform).position.x =xDist;
    other.attachedRigidbody.GetComponent(Transform).position.y =yDist;
}