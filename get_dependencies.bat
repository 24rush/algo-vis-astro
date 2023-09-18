:: Copy bundle.js and 310.bundle.js from the Algovis repository to the assets and dist folders
copy /Y "..\Algo-Vis\build\310.bundle.js" "..\algo-vis-astro\public\assets\scripts\"
copy /Y "..\Algo-Vis\build\bundle.js" "..\algo-vis-astro\public\assets\scripts\"

copy /Y "..\Algo-Vis\build\310.bundle.js" "..\algo-vis-astro\dist\assets\scripts\"
copy /Y "..\Algo-Vis\build\bundle.js" "..\algo-vis-astro\dist\assets\scripts\"

xcopy /E /Y /F "..\Algo-Vis\build\wordpress\quizzes" "..\algo-vis-astro\public\assets\algovis\quizzes\"
xcopy /E /Y /F "..\Algo-Vis\build\wordpress\snippets" "..\algo-vis-astro\public\assets\algovis\snippets\"
xcopy /E /Y /F "..\Algo-Vis\build\wordpress\exercises" "..\algo-vis-astro\public\assets\algovis\exercises\"