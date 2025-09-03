import React from 'react';

const TodoList = () => {
    // ข้อมูลที่จะแสดง
    const todos = [
        { id: 1, text: 'อ่านหนังสือวิชา SYSTEM ANALYSIS AND DESIGN', completed: true },
        { id: 2, text: 'อ่านหนังสือวิชา DATABASE SYSTEM ADMINISTRATION', completed: true },
        { id: 3, text: 'อ่านหนังสือวิชา ARTIFICIAL INTELLIGENCE FOR INFORMATION TECHNOLOGY', completed: true },
        { id: 4, text: 'อ่านหนังสือวิชา CLIENT SIDE WEB PROGRAMMING', completed: true },
        { id: 5, text: 'อ่านหนังสือวิชา SERVER SIDE WEB PROGRAMMING', completed: false },
        { id: 6, text: 'อ่านหนังสือวิชา BUSINESS INFORMATION SYSTEMS', completed: false },
        { id: 7, text: 'อ่านหนังสือวิชา SOFTWARE REQUIREMENT SPECIFICATION AND MANAGEMENT', completed: false },
        { id: 8, text: 'ฝึกเขียนโค้ด sql subquery cte', completed: true },
        { id: 9, text: 'ส่งวิชา ai วันอาทิตย์ 31/08/25', completed: true },
        { id: 10, text: 'ส่งวิชา fe วันพุธ 3/09/25', completed: true },
        { id: 11, text: 'ส่งวิชา be วันศุกร์ 5/09/25', completed: true },
        { id: 12, text: 'สร้างโปรเจคจริง', completed: false }

    ];
    
    // คำนวณสถิติ
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;
    const percentage = Math.round((completedCount / totalCount) * 100);
    
    return (
        <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px' }}>
            <h3>📝 รายการที่ต้องทำ</h3>
            
            {/* Progress Bar */}
            <div style={{
                backgroundColor: '#f0f0f0',
                borderRadius: '20px',
                padding: '3px',
                margin: '15px 0'
            }}>
                <div style={{
                    backgroundColor: '#4caf50',
                    width: `${percentage}%`,
                    textAlign: 'center',
                    borderRadius: '17px',
                    padding: '8px 0',
                    color: 'white',
                    fontWeight: 'bold',
                    transition: 'width 0.3s ease'
                }}>
                    {percentage}%
                </div>
            </div>
            
            {/* Todo Items */}
            <div style={{ margin: '20px 0' }}>
                {todos.map(todo => (
                    <div 
                        key={todo.id}
                        style={{
                            padding: '12px',
                            margin: '8px 0',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: todo.completed ? '#e8f5e8' : '#fff',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <span style={{ marginRight: '12px', fontSize: '18px' }}>
                            {todo.completed ? '✅' : '⬜'}
                        </span>
                        <span style={{
                            flex: 1,
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            color: todo.completed ? '#666' : '#333'
                        }}>
                            {todo.text}
                        </span>
                    </div>
                ))}
            </div>
            
            {/* Summary */}
            <div style={{
                marginTop: '20px',
                textAlign: 'center',
                padding: '15px',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: 'bold'
            }}>
                ✨ ทำเสร็จแล้ว {completedCount} จาก {totalCount} รายการ
            </div>
        </div>
    );
};

export default TodoList;