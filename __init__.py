from flask import Flask, render_template, request, redirect, url_for, flash
import secrets
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os

secret_key = secrets.token_hex(16)
load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = secret_key


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/contact", methods=['POST'])
def contact():
    client_email = request.form.get("client-email")
    print(client_email)

    app.config["MAIL_SERVER"] = 'smtp.gmail.com'
    app.config['MAIL_PORT'] = 465
    app.config['MAIL_USERNAME'] = os.getenv('EMAIL_USERNAME')
    app.config['MAIL_PASSWORD'] = os.getenv('EMAIL_PASSWORD')
    app.config['MAIL_USE_TLS'] = False
    app.config['MAIL_USE_SSL'] = True
    mail = Mail(app)

    msg = Message(
        subject="Query from Website",
        sender=os.getenv('EMAIL_USERNAME'),
        recipients=["Testmpt1m@gmail.com"]
    )
    msg.body = f"Client's Email: {client_email}"
    mail.send(msg)

    flash("Thank you for your response. We'll get back to you soon.")
    return redirect(url_for("index"))

app.run(debug=True)