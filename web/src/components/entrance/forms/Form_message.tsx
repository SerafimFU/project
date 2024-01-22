function invalidInput(event: any) {
    (event.target as HTMLInputElement).setCustomValidity(event.target.title)
} 

export default invalidInput
