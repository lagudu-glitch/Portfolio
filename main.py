import flask

# Configure the app object
app = flask.Flask (__name__, static_url_path='/static')

# Route for home page
@app.route("/")
@app.route("/home")
def home ():
    return flask.render_template("home.html" , title='HOME')

# Route for Projects
@app.route("/Projects")
def Project ():
    return flask.render_template("project.html", title="PROJECTS")

# Route for Blog
@app.route("/Blog")
def Blog ():
    return flask.render_template("blog.html", title="BLOG")

if __name__ == '__main__':
    app.run(debug=True)