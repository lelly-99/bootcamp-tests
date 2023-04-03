function yearsAgo(year){
    const currentYear = new Date();
    let current = currentYear.getFullYear();
    let howManyYears =current - new Date(year);
    return howManyYears;
}

