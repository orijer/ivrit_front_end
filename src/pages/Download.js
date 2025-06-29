import "./Download.css"

function Download() {
    return (
        <div id="download-page">
            <h1>מבוא</h1>

            <p>
                ניתן להוריד בקלות תוכנה למחשב האישי שלכם שתריץ קוד בשפת Ivrit ללא תלות בעורך האינטרנטי שבאתר הזה. <br />
                זה מומלץ בעיקר למי שכבר התנסו בשפה ורוצים להמשיך לתכנת קטעי קוד ארוכים ומורכבים יותר. <br />
            </p>

            <h1>הורדה</h1>

            <p>
                בשביל להוריד את התוכנה צריך לגשת ללינק <a href="https://github.com/orijer/IvritInterpreter/tree/main">הזה</a>. <br />
                אתם תראו עמוד שנראה כך: 
            </p>

            <img src="/IvritInterpreterGitPage.png" alt="IvritInterpreterGitPageImage" className="mb-5" />

            <p>
                לחצו על ההוצאה האחרונה (ייתכן והמספר אצלכם יהיה שונה מ 1.1.0.0):
            </p>

            <img src="/IvritInterpreterGitPageCircled.png" alt="IvritInterpreterGitPageCircledImage" className="mb-5" />

            <p>
                לחיצה עליו תוביל אתכם לדף שנראה כך:
            </p>

            <img src="/IvritInterpreterGitReleasesPage.png" alt="IvritInterpreterGitReleasesPageImage" className="mb-5" />

            <p>
                בו עליכם ללחוץ על IvritInterpreter.exe:
            </p>

            <img src="/IvritInterpreterGitReleasesPageCircled.png" alt="IvritInterpreterGitReleasesPageCircledImage" className="mb-5" />

            <p>
                זה יוריד למחשב הפרטי שלכם קובץ בשם IvritInterpreter.exe. את הקובץ הזה ניתן לפתוח בעזרת שתי לחיצות ולקבל את המסך הבא: 
            </p>

            <img src="/IvritInterpreterAppGUI.png" alt="IvritInterpreterAppGUIImage" className="mb-5" />

            <p>
                כדי להשתמש בו עליכם קודם לכתוב את הקוד שלכם במסמך טקסט (לא קובץ וורד!). כתבו את הכתובת שלו במלבן התחתון של קלט המשתמש (ניתן להעתיק את כתובת הקובץ בעזרת לחיצה של קליק ימני עליו, ובחירת "העתק כנתיב"), ולחצו על מקש ENTER. זה יתחיל את ריצת התכנית באופן דומה לעורך שבאתר. 
            </p>
        </div>
    )
}

export default Download