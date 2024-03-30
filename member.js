function skillsMember() {
    var skills = {
        name: 'John',
        age: 25,
        skills: ['HTML', 'CSS', 'JS'],
        // Method
        showSkills: function() {
            this.skills.forEach(function(skill) {
                console.log(skill);
            });
        }
    };

    return skills;
}