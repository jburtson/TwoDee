var healAmount : int = 1;
function OnTriggerStay2D(other: Collider2D) {
    other.attachedRigidbody.GetComponent(Transform).localScale.y/= (1+(healAmount*Time.deltaTime));
    other.attachedRigidbody.GetComponent(Transform).localScale.x/= (1+(healAmount*Time.deltaTime));
}