const add = document.querySelector('#add');
const courseCode = document.querySelector('#course-code');
const unitHour = document.querySelector('#unithour');
const grade = document.querySelector('#grade');
const points = document.querySelector('#points');
const tbody = document.querySelector('#tbody');
const tfoot = document.querySelector('#tfoot');
const table = document.querySelector('#table');
const calc_gpa = document.querySelector('#calc-gpa');
const calc_gpa_by_points = document.querySelector('#calc-gpa-points');
const clear = document.querySelector('#clear');
let gpaArray = [];
let gpaArray2 = [];

add.addEventListener('click', () => {
    if (courseCode.value === '' || unitHour.value <= 0 || grade.selectedIndex === 0) {
        alert("wrong input,please check again");
    }
    else {
        const tr = document.createElement('tr');
        const tdcourseCode = document.createElement('td');
        tdcourseCode.innerHTML = courseCode.value;
        const tdunitHour = document.createElement('td');
        tdunitHour.innerHTML = unitHour.value;
        const tdgrade = document.createElement('td');
        tdgrade.innerHTML = grade.options[grade.selectedIndex].text;
        const tdpoints = document.createElement('td');
        tdpoints.innerHTML = points.value;
        tr.appendChild(tdcourseCode);
        tr.appendChild(tdunitHour);
        tr.appendChild(tdgrade);
        tr.appendChild(tdpoints);
        tbody.appendChild(tr);
        table.classList.remove('display-none');
        calc_gpa.classList.remove('display-none');
        calc_gpa_by_points.classList.remove('display-none');
        clear.classList.remove('display-none');
        gpaArray.push({ unitHour: unitHour.value, grade: grade.options[grade.selectedIndex].value });
        gpaArray2.push({ unitHour: unitHour.value, points: points.value });

        courseCode.value = '';
        unitHour.value = '';
        grade.selectedIndex = '0';
        points.value = '';
    }




});



calc_gpa.addEventListener('click', () => {
    let unitHours = 0,
        multiplyunithourandgrades = 0,
        sumOfProductOfUnitLoadsAndGrades = 0;

    gpaArray.forEach((result) => {
        unitHours += parseInt(result.unitHour);
        multiplyunithourandgrades =
            parseInt(result.unitHour) * parseInt(result.grade);
        sumOfProductOfUnitLoadsAndGrades += multiplyunithourandgrades;
    });
    const tr = document.createElement("tr");

    tdTotalUnitLoad = document.createElement("td");
    tdTotalUnitLoad.innerHTML = `your total unit load is ${unitHours}`;

    tdGpa = document.createElement("td");
    tdGpa.setAttribute("colspan", "2");
    tdGpa.innerHTML = `your GPA is ${(
        sumOfProductOfUnitLoadsAndGrades / unitHours
    ).toFixed(2)} `;

    tr.appendChild(tdTotalUnitLoad);
    tr.appendChild(tdGpa);
    if (tfoot.querySelector("tr") !== null) {
        tfoot.querySelector("tr").remove();
    }
    tfoot.appendChild(tr);




});
calc_gpa_by_points.addEventListener('click', () => {
    let unitHours = 0,
        multiplyunithourandgrades = 0,
        sumOfProductOfUnitLoadsAndGrades = 0;

    gpaArray2.forEach((result) => {
        unitHours += parseInt(result.unitHour);

        if (parseInt(result.points) >= 90 && parseInt(result.points) <= 100) {
            multiplyunithourandgrades =
                parseInt(result.unitHour) * 4;
        }

        else if (parseInt(result.points) >= 85 && parseInt(result.points) < 90) {
            multiplyunithourandgrades =
                parseInt(result.unitHour) * 3.7;
        }
        else if (parseInt(result.points) >= 80 && parseInt(result.points) < 85) {
            multiplyunithourandgrades =
                parseInt(result.unitHour) * 3.3;
        }
        else if (parseInt(result.points) >= 75 && parseInt(result.points) < 80) {
            multiplyunithourandgrades =
                parseInt(result.unitHour) * 3;
        }
        else if (parseInt(result.points) >= 70 && parseInt(result.points) < 75) {
            multiplyunithourandgrades =
                parseInt(result.unitHour) * 2.7;
        }
        else if (parseInt(result.points) >= 65 && parseInt(result.points) < 70) {
            multiplyunithourandgrades =
                parseInt(result.unitHour) * 2.4;
        }
        else if (parseInt(result.points) >= 60 && parseInt(result.points) < 65) {
            multiplyunithourandgrades =
                parseInt(result.unitHour) * 2.2;
        }
        else if (parseInt(result.points) >= 50 && parseInt(result.points) < 60) {
            multiplyunithourandgrades =
                parseInt(result.unitHour) * 2;
        }
        else if (parseInt(result.points) < 50) {
            multiplyunithourandgrades =
                parseInt(result.unitHour) * 0;
        }
        sumOfProductOfUnitLoadsAndGrades += multiplyunithourandgrades;

    });
    const tr = document.createElement("tr");

    tdTotalUnitLoad = document.createElement("td");
    tdTotalUnitLoad.innerHTML = `your total unit load by points is ${unitHours}`;

    tdTotalsumproduct = document.createElement("td");
    tdTotalsumproduct.innerHTML = `your total unit load by blablabla is ${sumOfProductOfUnitLoadsAndGrades}`;



    tdGpa = document.createElement("td");
    tdGpa.setAttribute("colspan", "2");
    tdGpa.innerHTML = `your GPA  by points is ${(
        sumOfProductOfUnitLoadsAndGrades / unitHours
    ).toFixed(3)} `;

    tr.appendChild(tdTotalUnitLoad);
    tr.appendChild(tdTotalsumproduct);
    tr.appendChild(tdGpa);

    if (tfoot.querySelector("tr") !== null) {
        tfoot.querySelector("tr").remove();
    }
    tfoot.appendChild(tr);




});
clear.addEventListener("click", () => {
    gpArry = [];
    tbody.querySelectorAll("*").forEach((child) => child.remove());
    if (tfoot.querySelector("tr") !== null) {
        tfoot.querySelector("tr").remove();
    }

    table.classList.add("display-none");
    calc_gpa.classList.add("display-none");
    clear.classList.add("display-none");
});