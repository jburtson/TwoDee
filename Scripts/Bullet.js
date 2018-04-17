// The speed the bullet moves
var damage : int = 1;

// The number of seconds before the bullet is automatically destroyed
var SecondsUntilDestroy : float = 10;
   
private var startTime : float;
   
function Start () {
    startTime = Time.time;
}
   
function FixedUpdate () {
    // If the Bullet has existed as long as SecondsUntilDestroy, destroy it
    if (Time.time - startTime >= SecondsUntilDestroy) {
        Destroy(this.gameObject);
    }
}

function OnCollisionEnter2D(collision : Collision2D) {
    // Get the Object that the Bullet collided with, if any
    var hit = collision.transform.gameObject;
    
    // if it hit an enemy
    if (hit.layer == 12) {
        // Subtract one from the enemy's health
        hit.GetComponent(Enemy).health-=damage;
    }
    // Remove the Bullet from the world
    //Destroy(this.gameObject);
}