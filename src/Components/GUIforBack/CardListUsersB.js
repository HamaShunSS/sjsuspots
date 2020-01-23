import React from 'react';
import Card from "./CardUsersB";


const CardListForB = ({users,
                          onDeleteUser,
                          email,
                          status,
                          onCommentsChangeB,
                          onSubmitBackUserName,
                          onSubmitBackStatus,
                          onSubmitBackEmail,
                          onSubmitBackCountry
                      }) => {
    return(
        <div>
            {
                users.map((user, i) => {
                    return (
                        <Card
                            user={users[i]}
                            onCommentsChangeB={onCommentsChangeB}
                            onDeleteUser={onDeleteUser}
                            email={email}
                            status={status}
                            onSubmitBackUserName={onSubmitBackUserName}
                            onSubmitBackStatus={onSubmitBackStatus}
                            onSubmitBackEmail={onSubmitBackEmail}
                            onSubmitBackCountry={onSubmitBackCountry}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardListForB;