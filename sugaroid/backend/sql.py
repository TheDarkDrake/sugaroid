import sqlite3


class PossibleSQLInjectionPanicError(ValueError):
    """
    Raises PossibleSQLInjectionPanicError in case
    of possible SQL Injection.
    SQL Injection is an attempt to change the data 
    by altering data within the string by attempting
    to manipulate the database entry by multiple 
    semicolons for example
    """
    pass

def convert_data_escaped_string(data: tuple):
    """
    Converts data from tuple form to a string statement
    to a SQL string statement

    data: tuple
    return: a SQL formatted string
    rtype: str
    """
    _processed_data = list()
    for i in data:
        if isinstance(i, str):
            # append the data with enclosing double quotes
            if ';' in i:
                # the data should be preprocessed to remove
                # semicolons in case if its necessary
                # if the caller did not escape the semicolon
                # we should raise a PossibleSQLInjection panic
                raise PossibleSQLInjectionPanicError(
                    "An attempt to inject SQL issues was found")
                
            _processed_data.append('"{}"'.format(i))
        elif isinstance(i, int) or isinstance(i, float):
            # append the data as raw string
            _processed_data.append("{}".format(i))
        elif i is None:
            # append to the line 
            _processed_data.append("NULL")
        else:
            logger.warn("Unknown data type encountered {} for {}. "
                        "Make sure that data type matches "
                        "`int`, `str`, `float`, `None`".format(
                            type(i), i))
            _processed_data.append('"{}"'.format(i))

    # debug: Assert that all the elements are of string type
    # which otherwise may crash with a type error
    assert all([isinstance(x, str) for x in _processed_data])
    return ", ".join(_processed_data)


class SqlDatabaseManagement:
    def __init__(self, path_to_db, table="sg_history"):
        self._path_to_db = path_to_db
        self.database_instance = sqlite3.connect(self._path_to_db)
        self._cnx = self.database_instance.cursor()
        sel._table = table

    @property
    def table(self):
        """
        Return the table name on target
        """
        return self._table

    @property
    def database_path(self):
        """
        Return the path to the database
        """
        return self._path_to_db

    def _execute(self, command):
        """
        Protected, Private method to execute an sql command

        command: a valid SQL statement
        """
        self._cnx.execute(command)

    def _add(self, data: tuple):
        """
        Adds data to the SQLite3 database into the table

        data: tuple
        """
        self._cnx.execute(
            "INSERT INTO {tablename} VALUES({values})".format(
                tablename=self.table,
                values=", ".join([data)


