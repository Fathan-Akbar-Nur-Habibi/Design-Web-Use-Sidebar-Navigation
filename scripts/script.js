function toggleSidebar() { 
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');
}

document.getElementById("dashboard-btn").addEventListener("click", function() { 
    document.getElementById("content").innerHTML = "<h2> Dashboard</h2><p>This is Dashboard page</p>";
});

document.getElementById("reports-btn").addEventListener("click", function() {
    document.getElementById("content").innerHTML ="<h2>Reports</h2><p>This is Reports Page</p>";
});

document.getElementById("rewards-btn").addEventListener("click", function() {
    document.getElementById("content").innerHTML = "<h2>Rewards</h2><p>This is Rewards Page</p>"; 
}); 

document.getElementById("messages-btn").addEventListener("click", function(){
    document.getElementById("content").innerHTML= "<h2>Messages</h2><p>This is Messages Page</p>"; 
}); 

document.getElementById("settings-btn").addEventListener("click", function(){
    document.getElementById("content").innerHTML= "<h2>Settings</h2><p>This is Settings Page</p>"; 
}); 

document.getElementById("logout-btn").addEventListener("click", function() {
    alert("You logout.");
});