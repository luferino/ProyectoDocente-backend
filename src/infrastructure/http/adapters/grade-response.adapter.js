export class gradeRsponseAdapter {
    static toHttp(result){
        return {
            status: 200,
            body: {
                success: true,
                data: {
                    student: dto.student,
                    average: dto.average
                }
            }  
        }
    }
}