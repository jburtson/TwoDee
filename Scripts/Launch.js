var upwardForce : int = 100;
function OnTriggerStay2D(other: Collider2D) {
	other.attachedRigidbody.AddForce(Vector2.up*upwardForce);
}